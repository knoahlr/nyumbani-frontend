/*
  # Initial Schema Setup for Nyumbani Property Management

  1. New Tables
    - properties
      - id (uuid, primary key)
      - created_at (timestamp)
      - title (text)
      - address (text)
      - rent_amount (numeric)
      - status (text)
      - owner_id (uuid, references auth.users)
    
    - tenants
      - id (uuid, primary key)
      - created_at (timestamp)
      - user_id (uuid, references auth.users)
      - property_id (uuid, references properties)
      - lease_start (date)
      - lease_end (date)
      - rent_amount (numeric)
      - status (text)
    
    - payments
      - id (uuid, primary key)
      - created_at (timestamp)
      - tenant_id (uuid, references tenants)
      - amount (numeric)
      - due_date (date)
      - paid_date (date)
      - status (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for property owners and tenants
*/

-- Properties table
CREATE TABLE properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  address text NOT NULL,
  rent_amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'available',
  owner_id uuid REFERENCES auth.users(id) NOT NULL,
  
  CONSTRAINT valid_status CHECK (status IN ('available', 'rented', 'maintenance'))
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own properties"
  ON properties
  FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id);

CREATE POLICY "Users can insert their own properties"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can update their own properties"
  ON properties
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id);

-- Tenants table
CREATE TABLE tenants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  property_id uuid REFERENCES properties(id) NOT NULL,
  lease_start date NOT NULL,
  lease_end date NOT NULL,
  rent_amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'active',
  
  CONSTRAINT valid_lease_dates CHECK (lease_end > lease_start),
  CONSTRAINT valid_status CHECK (status IN ('active', 'past', 'pending'))
);

ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their tenancies"
  ON tenants
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    auth.uid() IN (
      SELECT owner_id FROM properties WHERE id = property_id
    )
  );

CREATE POLICY "Property owners can insert tenants"
  ON tenants
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IN (
      SELECT owner_id FROM properties WHERE id = property_id
    )
  );

-- Payments table
CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  tenant_id uuid REFERENCES tenants(id) NOT NULL,
  amount numeric NOT NULL,
  due_date date NOT NULL,
  paid_date date,
  status text NOT NULL DEFAULT 'pending',
  
  CONSTRAINT valid_amount CHECK (amount > 0),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'paid', 'late', 'failed'))
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT user_id FROM tenants WHERE id = tenant_id
    ) OR
    auth.uid() IN (
      SELECT owner_id 
      FROM properties 
      JOIN tenants ON properties.id = tenants.property_id 
      WHERE tenants.id = tenant_id
    )
  );

CREATE POLICY "Users can pay their own payments"
  ON payments
  FOR UPDATE
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT user_id FROM tenants WHERE id = tenant_id
    )
  );
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          created_at: string
          title: string
          address: string
          rent_amount: number
          status: 'available' | 'rented' | 'maintenance'
          owner_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          address: string
          rent_amount: number
          status?: 'available' | 'rented' | 'maintenance'
          owner_id: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          address?: string
          rent_amount?: number
          status?: 'available' | 'rented' | 'maintenance'
          owner_id?: string
        }
      }
      tenants: {
        Row: {
          id: string
          created_at: string
          user_id: string
          property_id: string
          lease_start: string
          lease_end: string
          rent_amount: number
          status: 'active' | 'past' | 'pending'
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          property_id: string
          lease_start: string
          lease_end: string
          rent_amount: number
          status?: 'active' | 'past' | 'pending'
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          property_id?: string
          lease_start?: string
          lease_end?: string
          rent_amount?: number
          status?: 'active' | 'past' | 'pending'
        }
      }
      payments: {
        Row: {
          id: string
          created_at: string
          tenant_id: string
          amount: number
          due_date: string
          paid_date: string | null
          status: 'pending' | 'paid' | 'late' | 'failed'
        }
        Insert: {
          id?: string
          created_at?: string
          tenant_id: string
          amount: number
          due_date: string
          paid_date?: string | null
          status?: 'pending' | 'paid' | 'late' | 'failed'
        }
        Update: {
          id?: string
          created_at?: string
          tenant_id?: string
          amount?: number
          due_date?: string
          paid_date?: string | null
          status?: 'pending' | 'paid' | 'late' | 'failed'
        }
      }
    }
  }
}
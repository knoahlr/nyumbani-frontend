import { supabase } from './supabase';

const API_URL = 'http://localhost:8000/api';

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const { data: { session } } = await supabase.auth.getSession();
  
  const defaultOptions: RequestInit = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.access_token}`,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}

export const api = {
  // Properties
  getProperties: () => fetchWithAuth('/properties/'),
  createProperty: (data: any) => fetchWithAuth('/properties/create/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Tenants
  getTenants: () => fetchWithAuth('/tenants/'),
  createTenant: (data: any) => fetchWithAuth('/tenants/create/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Payments
  getPayments: () => fetchWithAuth('/payments/'),
};
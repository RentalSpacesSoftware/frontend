export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  roles: {
    id: number;
    description: string;
  }[];
  token: string;
}

export type AuthStatus = 'authorize' | 'unauthorized' | 'pending'

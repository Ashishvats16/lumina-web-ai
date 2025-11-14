export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface SignInFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
  redirectTo?: string;
}

export interface SessionData {
  userId: string;
  email: string;
  name: string;
  expiresAt: Date;
}
export interface JwtPayload {
    iat: number;
    exp: number;
    user_id: number;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: number;
    name: string;
    profile: string;
  };
}

export interface User {
  id: number;
  name: string;
  profile: string;
}

export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}
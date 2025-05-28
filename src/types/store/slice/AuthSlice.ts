import { User } from "@/types/auth";

export type AuthState = {
    isAuthenticated: boolean;
    user: null | User;
  };
  
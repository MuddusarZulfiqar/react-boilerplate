import { createContext } from "react";
import { AuthContextType } from "@/types/auth/provider";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

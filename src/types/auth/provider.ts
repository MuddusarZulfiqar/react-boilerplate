import { LoginFormValues } from "../form";
import { User } from "./user";

export interface AuthContextType {
    user: User | null;
    login: (data: LoginFormValues) => Promise<void>;
    logout: () => void;
    isLoading?: boolean;
  }
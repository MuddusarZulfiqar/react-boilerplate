import { User } from "../auth";
import { PaginatedResponse } from "./response";

export interface UserResponse extends PaginatedResponse<User> {
    users: User[];
}
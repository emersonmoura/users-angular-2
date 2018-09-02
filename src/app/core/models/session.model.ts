import { User } from "./user.model";

export interface Session {
    logged?: boolean;
    user? : User;
}
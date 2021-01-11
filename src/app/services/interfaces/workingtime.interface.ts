import { User } from "./user.interface";

export interface WorkingTime{
    id:number,
    user:User,
    start: string,
    end: string,
    created_at: string,
    updated_at: string,
    validated: boolean
}
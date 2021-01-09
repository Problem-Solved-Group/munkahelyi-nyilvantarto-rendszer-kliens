import { User } from "./user.interface";

export interface Site {
    id:number,
    name:string,
    location:string,
    users:User[]
}
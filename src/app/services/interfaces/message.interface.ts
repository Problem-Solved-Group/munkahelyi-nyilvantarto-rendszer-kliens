import { User } from "./user.interface";

export interface Message {
    id:number,
    title:string,
    message:string,
    created_at:string,
    seen_at:string,
    sender:User,
    receiver:User,
}
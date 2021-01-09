import { User } from "./user.interface";

export interface Message {
    id:number,
    title:string,
    message:string,
    createdAt:string,
    seenAt:string,
    sender:User,
    receiver:User,
}
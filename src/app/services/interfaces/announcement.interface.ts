import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { User } from "./user.interface";

export interface Announcement{
    id:number,
    user:User,
    title:string,
    message:string,
    created_at:string,
    updated_at:string,
    showUntil:string
}
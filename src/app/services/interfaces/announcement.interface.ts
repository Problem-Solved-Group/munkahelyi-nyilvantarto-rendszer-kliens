import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { User } from "./user.interface";

export interface Announcement{
    user:User,
    title:string,
    message:string,
    createdAt:string,
    updatedAt:string,
    showUntil:string
}
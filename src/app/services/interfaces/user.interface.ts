import { Site } from "./site.interface";

export interface User{
    name:string,
    username:string,
    email:string,
    role:string,
    sites:Site[]
}
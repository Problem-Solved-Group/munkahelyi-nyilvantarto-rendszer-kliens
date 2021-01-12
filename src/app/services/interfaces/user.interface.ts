import { Site } from "./site.interface";

export interface User{
    id:number,
    name:string,
    username:string,
    email:string,
    role:string,
    sites:Site[]
}
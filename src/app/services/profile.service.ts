import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { baseUrl } from 'src/environments/environment';
import { User } from "./interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    public currentUser$ = new BehaviorSubject<User>(null);
    public allUser$ = new BehaviorSubject<User[]>([]);
    
    constructor(private http: HttpClient){
        this.getCurrentUser();
    }

    getCurrentUser() {
        this.http.get<User>(`${baseUrl}/users/whoami`, {headers: this.generateHeader()})
        .subscribe(c => {
            this.currentUser$.next(c);
        });
    }

    getAllUser() {
        this.http.get<User[]>(`${baseUrl}/users/allusers`, {headers: this.generateHeader()})
        .subscribe(u => {
            this.allUser$.next(u);
        });
    }

    generateHeader() {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        return header;
    }
}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { baseUrl } from 'src/environments/environment';
import { Site } from "./interfaces/site.interface";
import { User } from "./interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    public sites$ = new BehaviorSubject<Site[]>([]);
    
    constructor(private http: HttpClient){

    }

    getCurrentUser() {
        this.http.get<Site[]>(`${baseUrl}/sites`, {headers: this.generateHeader()})
        .subscribe(s => {
            this.sites$.next(s);
        });
    }

    generateHeader() {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        return header;
    }
}
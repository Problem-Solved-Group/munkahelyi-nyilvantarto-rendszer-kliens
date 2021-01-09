import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { baseUrl } from 'src/environments/environment';
import { Announcement } from "./interfaces/announcement.interface";

@Injectable({
    providedIn: 'root'
})
export class MessageService{
    public messages$ = new BehaviorSubject<Announcement[]>([]);
    
    constructor(private http: HttpClient){

    }

    getAvailableAnnouncements() {
        
        const header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        this.http.get<Announcement[]>(`${baseUrl}/announcements`, {headers: header})
        .subscribe(a => {
            console.log(a)
            this.messages$.next(a);
        });
    }
}
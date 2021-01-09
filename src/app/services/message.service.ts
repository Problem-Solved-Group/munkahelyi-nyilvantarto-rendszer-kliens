import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Message } from "./interfaces/message.interface";
import { baseUrl } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MessageService{
    public messages$ = new BehaviorSubject<Message[]>([]);
    
    constructor(private http: HttpClient){

    }

    getSentMessages() {
        const header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        this.http.get<Message[]>(`${baseUrl}/messages/sent`, {headers: header})
        .subscribe(m => {
            this.messages$.next(m);
        });
    }
}
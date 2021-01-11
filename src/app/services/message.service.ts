import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Message } from "./interfaces/message.interface";
import { baseUrl } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MessageService{
    public sentMessages$ = new BehaviorSubject<Message[]>([]);
    public receivedMessages$ = new BehaviorSubject<Message[]>([]);
    
    constructor(private http: HttpClient){

    }

    getSentMessages() {
        this.http.get<Message[]>(`${baseUrl}/messages/sent`, {headers: this.generateHeader()})
        .subscribe(m => {
            this.sentMessages$.next(m);
        });
    }

    getReceivedMessages() {
        
        this.http.get<Message[]>(`${baseUrl}/messages/received`, {headers: this.generateHeader()})
        .subscribe(m => {
            this.receivedMessages$.next(m);
        });
    }

    generateHeader() {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        return header;
    }
}
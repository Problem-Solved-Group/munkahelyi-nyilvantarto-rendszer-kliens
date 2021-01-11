import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Message } from "./interfaces/message.interface";
import { baseUrl } from 'src/environments/environment';
import { NotificationService } from "./notification.service";

@Injectable({
    providedIn: 'root'
})
export class MessageService{
    public sentMessages$ = new BehaviorSubject<Message[]>([]);
    public receivedMessages$ = new BehaviorSubject<Message[]>([]);
    
    constructor(private http: HttpClient 
        , private ns : NotificationService){

    }

    getSentMessages() {
        this.http.get<Message[]>(`${baseUrl}/messages/sent`, {headers: this.generateHeader()})
        .subscribe(m => {
            
            this.sentMessages$.next(m);
            console.log(this.sentMessages$.getValue());
        });
    }

    getReceivedMessages() {
        
        this.http.get<Message[]>(`${baseUrl}/messages/received`, {headers: this.generateHeader()})
        .subscribe(m => {
            this.receivedMessages$.next(m);
        });
    }
    
    sendMessage(message:Message) {
        this.http.post<Message>(`${baseUrl}/messages`, message, {headers: this.generateHeader()})
        .subscribe(
            ni => {
                this.sentMessages$.next(this.sentMessages$.getValue().concat([ni]));
                this.ns.show('Üzenet sikeresen elküldve!');
            },
            error => {
                this.ns.show('HIBA! Sikertelen üzenetküldés!');
                console.error(error);
            }
        );
    }

    setSeen(message:Message) {
        this.http.put<Message>(`${baseUrl}/messages/${message.id}/seen`, {} ,{headers: this.generateHeader()})
        .subscribe(
            updatedMessage => {
                const index = this.receivedMessages$.getValue().findIndex(x => x.id === message.id);
                this.receivedMessages$.getValue()[index] = updatedMessage;
            },
            error => {
                console.log("henny penny");
                console.error(error);
            }
        );
    }

    generateHeader() {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        return header;
    }
}
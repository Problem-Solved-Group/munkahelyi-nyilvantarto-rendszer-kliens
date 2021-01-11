import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { baseUrl } from 'src/environments/environment';
import { Announcement } from "./interfaces/announcement.interface";
import { NotificationService } from "./notification.service";

@Injectable({
    providedIn: 'root'
})
export class AnnouncementService{
    public announcements$ = new BehaviorSubject<Announcement[]>([]);
    
    constructor(private http: HttpClient, private ns: NotificationService){

    }

    getAvailableAnnouncements() {
        const now = Date.now();
        const header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        this.http.get<Announcement[]>(`${baseUrl}/announcements`, {headers: header})
        .subscribe(a => {
            this.announcements$.next(a.reverse().filter(ann => Date.parse(ann.showUntil) > now));
            console.log(a);
        });
    }

    createAnnouncement(announcement:Announcement) {
        announcement.showUntil = announcement.showUntil.replace('T', ' ');
        announcement.showUntil = announcement.showUntil.concat(":00");
        this.http.post<Announcement>(`${baseUrl}/announcements`, announcement, {headers: this.generateHeader()})
        .subscribe(
            ni => {
                this.announcements$.next([ni].concat(this.announcements$.getValue()));
                this.ns.show('Hirdetmény létrehozva!');
            },
            error => {
                this.ns.show('HIBA! Sikertelen létrehozás!');
                console.error(error);
            }
        );
    }

    editAnnouncement(announcement:Announcement , id : number) {
        announcement.showUntil = announcement.showUntil.replace('T', ' ');
        this.http.put<Announcement>(`${baseUrl}/announcements/${id}`, announcement, {headers: this.generateHeader()})
        .subscribe(
            ni => {
                const index = this.announcements$.getValue().findIndex(x => x.id === id);
                this.announcements$.getValue()[index] = ni;
                this.ns.show('Hirdetmény sikeresen módosítva!');
            },
            error => {
                this.ns.show('HIBA! Sikertelen létrehozás!');
                console.error(error);
            }
        );
    }

    deleteAnnouncement(id: number) {
        this.http.delete<Announcement>(`${baseUrl}/announcements/${id}`, {headers: this.generateHeader()})
        .subscribe(
            success => {
                console.log(success);
                const index = this.announcements$.getValue().findIndex(x => x.id === id);
                this.announcements$.getValue().splice(index,1);
                this.ns.show('Hirdetmény sikeresen törölve!');
            },
            error => {
                this.ns.show('HIBA! Sikertelen törlés!');
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
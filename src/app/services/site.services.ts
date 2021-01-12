import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { baseUrl } from 'src/environments/environment';
import { Site } from "./interfaces/site.interface";

@Injectable({
    providedIn: 'root'
})
export class SiteService{
    public sites$ = new BehaviorSubject<Site[]>([]);
    
    constructor(private http: HttpClient){

    }

    getSites() {
        this.http.get<Site[]>(`${baseUrl}/site`, {headers: this.generateHeader()})
        .subscribe(s => {
            this.sites$.next(s);
        });
    }

    createSite(site:Site) {
        this.http.post<Site>(`${baseUrl}/site`, site, {headers: this.generateHeader()})
        .subscribe(s => {
            console.log(s);
            this.sites$.next(this.sites$.getValue().concat([s]));
            },
            error => {
                console.log(error);
            }
        );
    }

    editSite(id:number,site:Site) {
        this.http.put<Site>(`${baseUrl}/site/${id}`, site, {headers: this.generateHeader()})
        .subscribe(s => {
            const index = this.sites$.getValue().findIndex(x => x.id === id);
            this.sites$.getValue()[index] = s;
        });
    }

    deleteSite(id: number) {
        this.http.delete<Site>(`${baseUrl}/site/${id}`, {headers: this.generateHeader()})
        .subscribe(
            success => {
                console.log(success);
                const index = this.sites$.getValue().findIndex(x => x.id === id);
                this.sites$.getValue().splice(index,1);
            },
            error => {
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
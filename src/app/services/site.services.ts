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

    generateHeader() {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer ${localStorage.getItem('token')}`
        );
        return header;
    }
}
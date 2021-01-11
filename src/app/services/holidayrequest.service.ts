import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { HolidayRquest } from './interfaces/holidayrequest.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class HolidayrequestService {
  public holidayrequest$ = new BehaviorSubject<HolidayRquest[]>([]);

  constructor(private http: HttpClient, private ns: NotificationService) { }

  getAvailableHolidayRequest() {
    this.http.get<HolidayRquest[]>(`${baseUrl}/holiday`, {headers: this.generateHeader()})
    .subscribe(hr => {
      this.holidayrequest$.next(hr);
    });
  }


  getAvailableHolidayRequestByDay(date: string) {
    this.http.post<HolidayRquest[]>(`${baseUrl}/holiday/getbyday`, {day:date}, {headers: this.generateHeader()})
    .subscribe(hr => {
      this.holidayrequest$.next(hr);
    },
    error => {
      this.ns.show("HIBA! Sikertelen lekérdezés");
    }
    );
  }

  createHolidayRequest(hr:HolidayRquest) {
    console.log(hr);
    this.http.post<HolidayRquest>(`${baseUrl}/holiday`, hr, {headers: this.generateHeader()})
    .subscribe(
        ni => {
            this.holidayrequest$.next([ni].concat(this.holidayrequest$.getValue()));
            this.ns.show('Szabadságkérelem létrehozva!');
        },
        error => {
            this.ns.show('HIBA! Sikertelen létrehozás!');
            console.error(error);
        }
    );
  }

  validateHolidayRequest(dec: boolean, id : number) {
    this.http.post<HolidayRquest>(`${baseUrl}/holiday/${id}/evaluate`, {decision: dec}, {headers: this.generateHeader()})
    .subscribe(
        ni => {
            const index = this.holidayrequest$.getValue().findIndex(x => x.id === id);
            this.holidayrequest$.getValue()[index] = ni;
            this.ns.show('Szabadságkérelem sikeresen módosítva!');
        },
        error => {
            this.ns.show('HIBA! Sikertelen létrehozás!');
            console.error(error);
        }
    );
  }

  deleteHolidayRequest(id: number) {
    this.http.delete<HolidayRquest>(`${baseUrl}/holiday/${id}`, {headers: this.generateHeader()})
    .subscribe(
        success => {
            console.log(success);
            const index = this.holidayrequest$.getValue().findIndex(x => x.id === id);
            this.holidayrequest$.getValue().splice(index,1);
            this.ns.show('Szabadságkérelem sikeresen törölve!');
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

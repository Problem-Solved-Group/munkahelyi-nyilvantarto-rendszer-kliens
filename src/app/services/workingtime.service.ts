import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { WorkingTime } from './interfaces/workingtime.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class WorkingtimeService {
  public workingtimes$ = new BehaviorSubject<WorkingTime[]>([]);

  constructor(private http: HttpClient, private ns: NotificationService) { }

  getAvailableWorkingTimes() {
    this.http.get<WorkingTime[]>(`${baseUrl}/wt`, {headers: this.generateHeader()})
    .subscribe(wt => {
      this.workingtimes$.next(wt);
    });
  }

  getAvailableWorkingTimeByDay(date: string) {
    this.http.post<WorkingTime[]>(`${baseUrl}/wt/getbyday`, {day:date}, {headers: this.generateHeader()})
    .subscribe(hr => {
      this.workingtimes$.next(hr);
    },
    error => {
      this.ns.show("HIBA! Sikertelen lekérdezés");
    }
    );
  }

  createWorkingTime(wt:WorkingTime) {
    this.http.post<WorkingTime>(`${baseUrl}/wt`, wt, {headers: this.generateHeader()})
    .subscribe(
        ni => {
            this.workingtimes$.next([ni].concat(this.workingtimes$.getValue()));
            this.ns.show('Munkaidőbejelentés létrehozva!');
        },
        error => {
            this.ns.show('HIBA! Sikertelen létrehozás!');
            console.error(error);
        }
    );
  }

  editWorkingTime(wt:WorkingTime , id : number) {
    this.http.put<WorkingTime>(`${baseUrl}/wt/${id}`, wt, {headers: this.generateHeader()})
    .subscribe(
        ni => {
            const index = this.workingtimes$.getValue().findIndex(x => x.id === id);
            this.workingtimes$.getValue()[index] = ni;
            this.ns.show('Munkaidőbejelentés sikeresen módosítva!');
        },
        error => {
            this.ns.show('HIBA! Sikertelen létrehozás!');
            console.error(error);
        }
    );
  }

  deleteWorkingTime(id: number) {
    this.http.delete<WorkingTime>(`${baseUrl}/wt/${id}`, {headers: this.generateHeader()})
    .subscribe(
        success => {
            console.log(success);
            const index = this.workingtimes$.getValue().findIndex(x => x.id === id);
            this.workingtimes$.getValue().splice(index,1);
            this.ns.show('Munkaidőbejegyzés sikeresen törölve!');
        },
        error => {
            this.ns.show('HIBA! Sikertelen törlés!');
            console.error(error);
        }
    );
  }

  validate(id: number) {
    this.http.post<WorkingTime>(`${baseUrl}/wt/${id}/validate`,{}, {headers: this.generateHeader()})
    .subscribe(hr => {
      const index = this.workingtimes$.getValue().findIndex(x => x.id === id);
      this.workingtimes$.getValue()[index] = hr;
      this.ns.show("Sikeres validálás!")
    },
    error => {
      this.ns.show("HIBA! Sikertelen lekérdezés!");
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

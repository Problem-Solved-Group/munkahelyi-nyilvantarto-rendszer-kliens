import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HolidayrequestService } from '../services/holidayrequest.service';
import { HolidayRquest } from '../services/interfaces/holidayrequest.interface';
import { WorkingTime } from '../services/interfaces/workingtime.interface';
import { WorkingtimeService } from '../services/workingtime.service';
import { AddeditcalendarComponent } from './addeditcalendar/addeditcalendar.component';


interface TempDate {
  year: number;
  month: number;
  day: number;
}

interface TempMonth {
  year: number;
  prev: string;
  curr: string;
  next: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  days : string[] = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat','Vasárnap'];
  months: string[] = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
  now : Date;
  current: Date;
  today : TempDate;
  currentMonths: TempMonth;
  dateTable: TempDate[][];


  constructor(public dialog: MatDialog, public wt: WorkingtimeService, public hr: HolidayrequestService) {
    this.now = new Date();
    this.today = {year: this.now.getFullYear(), month: this.now.getMonth()+1, day: this.now.getDate()};


    this.current = new Date();
    this.currentMonths = this.changeCurrentMonth(this.current);
    this.dateTable = this.generateDateTable(this.current);

    setInterval(()=>{
      if(this.now.getMonth() === this.current.getMonth()) {
        this.current.setMonth(this.now.getMonth());
        this.currentMonths = this.changeCurrentMonth(this.current);
        this.dateTable = this.generateDateTable(this.current);
      }
    },300000)

    this.wt.getAvailableWorkingTimes();
    this.hr.getAvailableHolidayRequest();
  }

  ngOnInit(): void {
  }

  changeMonth(change: number) {
    this.current.setMonth(this.current.getMonth()+change);
    this.currentMonths = this.changeCurrentMonth(this.current);
    this.dateTable = this.generateDateTable(this.current);
  }


  generateDateTable(date : Date): TempDate[][] {
    const fixedDate = date;
    let varDate = new Date(date.getTime());
    varDate.setDate(1);
    let dateTable = new Array(6).fill(null).map(()=>new Array(7).fill(null));

    let i : number = 0;
    let j : number = varDate.getDay() === 0 ? 6 : varDate.getDay()-1;
    while(fixedDate.getMonth() === varDate.getMonth()) {
      const tmpDate = new Date(varDate.getTime());
      dateTable[i][j] = {year: tmpDate.getFullYear(), month: tmpDate.getMonth()+1, day: tmpDate.getDate()};
      varDate.setDate(varDate.getDate()+1);
      j++;
      if(varDate.getDay() == 1) {i++;j=0;}
    }
    if(dateTable[5][0] === null) {
      if(dateTable[4][0] === null) {
        return dateTable.slice(0,4);
      } else return dateTable.slice(0,5);
    } else return dateTable;
  }

  changeCurrentMonth(date : Date) : TempMonth {
    return {year: date.getFullYear(), prev: this.months[date.getMonth()-1<0 ? 11 :date.getMonth()-1], curr: this.months[date.getMonth()], next: this.months[date.getMonth()+1>11 ? 0 :date.getMonth()+1]};
  }


  onButtonClick(year: number, month: number, day: number) {
    const dialogRef = this.dialog.open(AddeditcalendarComponent, {width:'500px', data: {calendar: {year:year, month:month, day:day}}});
  }

  onModWTClick(workingTime: WorkingTime) {
    const dialogRef = this.dialog.open(AddeditcalendarComponent, {width:'500px', data: {wt: {date: workingTime}}});
  }
  onDeleteWTClick(workingTime: WorkingTime) {
    this.wt.deleteWorkingTime(workingTime.id)
  }

  onDeleteHRClick(holidayRequest : HolidayRquest) {
    this.hr.deleteHolidayRequest(holidayRequest.id);
  }
}

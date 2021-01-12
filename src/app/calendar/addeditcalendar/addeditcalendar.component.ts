import { splitAtColon } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HolidayrequestService } from 'src/app/services/holidayrequest.service';
import { WorkingTime } from 'src/app/services/interfaces/workingtime.interface';
import { WorkingtimeService } from 'src/app/services/workingtime.service';

interface TempDate {
  year: number;
  month: number;
  day: number;
}

@Component({
  selector: 'app-addeditcalendar',
  templateUrl: './addeditcalendar.component.html',
  styleUrls: ['./addeditcalendar.component.scss']
})
export class AddeditcalendarComponent implements OnInit {

  workingTimeForm: FormGroup;
  holidayRequestForm: FormGroup;
  date : TempDate;
  dateString: string;
  wOrH: number;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddeditcalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public wt: WorkingtimeService, public hr: HolidayrequestService
  ) {
    if(data.calendar) {
      this.wOrH = 0;
      this.date = data.calendar;
      this.dateString = this.date.year+"-"+this.expand(this.date.month)+"-"+this.expand(this.date.day);
      this.workingTimeForm = this.formBuilder.group({
        date: [{value:this.dateString,disabled:true}, Validators.required],
        start: [null, Validators.required],
        end: [null, Validators.required]
      });

      this.holidayRequestForm = this.formBuilder.group({
        requestedDay: [{value:this.dateString,disabled:true}, Validators.required]
      });
    }
    if(data.wt) {
      this.wOrH = 1;
      let workingTime : WorkingTime = data.wt.date;
      let date = workingTime.start.split(" ")[0];
      let startDate = workingTime.start.split(" ")[1];
      let endDate = workingTime.end.split(" ")[1];
      this.workingTimeForm = this.formBuilder.group({
        date: [{value:date,disabled:true}, Validators.required],
        start: [startDate, Validators.required],
        end: [endDate, Validators.required]
      });
    }
  }

  ngOnInit(): void {
  }

  expand(n : number): string {
    if((n+"").length == 1) return "0"+(n+"");
    else return n+"";
  }


  newWorkingTime(wF : FormGroup) {
    if(wF.valid) {
      if(this.data.wt === undefined){
        wF.value['start'] = this.dateString +" "+wF.value['start'] + ":00";
      wF.value['end'] =  this.dateString +" "+wF.value['end'] + ":00";
        this.wt.createWorkingTime(wF.value);
      }
      else{
        wF.value['start'] = this.data.wt.date.start.split(" ")[0] +" "+wF.value['start'].substring(0,5) + ":00";
        wF.value['end'] =  this.data.wt.date.end.split(" ")[0]+" "+wF.value['end'].substring(0,5) + ":00";
        console.log(wF.value);
        this.wt.editWorkingTime(wF.value , this.data.wt.date.id);
      }
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }

  newHolidayRequest(hrF: FormGroup) {
    console.log(hrF.value);
    hrF.value['requestedDay'] = hrF.value['requestedDay']+" 00:00:00";
    this.hr.createHolidayRequest(hrF.value);
    setTimeout(() => {this.dialogRef.close();},500);
  }
}

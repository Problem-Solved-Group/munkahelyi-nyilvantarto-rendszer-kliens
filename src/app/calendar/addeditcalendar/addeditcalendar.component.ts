import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any
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
        date: [{value:this.dateString,disabled:true}, Validators.required]
      });
    }
    if(data.wt) {
      this.wOrH = 1;
      let date:Date = data.wt.date;
      this.workingTimeForm = this.formBuilder.group({
        date: [{value:date.getFullYear()+"-"+this.expand(date.getMonth()+1)+"-"+this.expand(date.getDate()),disabled:true}, Validators.required],
        start: [this.expand(date.getHours())+":"+this.expand(date.getMinutes()), Validators.required],
        end: [this.expand(date.getHours())+":"+this.expand(date.getMinutes()), Validators.required]
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
    console.log(wF);
    if(wF.valid) {
      wF.value['start'] = this.dateString+"T"+wF.value['start'];
      wF.value['end'] = this.dateString+"T"+wF.value['end'];
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }

  newHolidayRequest(hrF: FormGroup) {
    console.log(hrF.value);
    setTimeout(() => {this.dialogRef.close();},500);
  }
}

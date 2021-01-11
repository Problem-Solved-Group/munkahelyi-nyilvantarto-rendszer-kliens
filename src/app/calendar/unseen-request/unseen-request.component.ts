import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HolidayrequestService } from 'src/app/services/holidayrequest.service';
import { WorkingTime } from 'src/app/services/interfaces/workingtime.interface';
import { WorkingtimeService } from 'src/app/services/workingtime.service';

@Component({
  selector: 'app-unseen-request',
  templateUrl: './unseen-request.component.html',
  styleUrls: ['./unseen-request.component.scss']
})
export class UnseenRequestComponent implements OnInit {

  dateGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public wt : WorkingtimeService,
    public hr : HolidayrequestService
  ) {
    let date = new Date();
    let dateString = date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate();
    this.dateGroup = this.formBuilder.group({
      day: [dateString, Validators.required]
    });
    this.hr.getAvailableHolidayRequestByDay(dateString);
    this.wt.getAvailableWorkingTimeByDay(dateString);
  }

  ngOnInit(): void {
  }


  list(dateGroup : FormGroup) {
    if(dateGroup.valid) {
      this.hr.getAvailableHolidayRequestByDay(dateGroup.value['day']);
      this.wt.getAvailableWorkingTimeByDay(dateGroup.value['day']);
      console.log(this.wt.workingtimes$);
    }
  }

  evaluate(id: number, decision: boolean) {
    this.hr.validateHolidayRequest(decision, id);
  }

  validateWT(item: WorkingTime) {
    this.wt.validate(item.id);
  }
}

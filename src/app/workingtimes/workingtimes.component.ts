import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workingtimes',
  templateUrl: './workingtimes.component.html',
  styleUrls: ['./workingtimes.component.scss']
})
export class WorkingtimesComponent implements OnInit {

  days : string[] = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];

  date : Date;

  constructor() {
    this.date = new Date();
    console.log(this.date);
    console.log(this.date.getDay());

    let newDate = new Date();
    newDate.setUTCDate(1);
    console.log(this.date, newDate);

    while(this.date.getUTCMonth() === newDate.getUTCMonth()) {
      console.log(newDate.getMonth(),newDate.getDate(),this.days[newDate.getDay()]);
      newDate.setDate(newDate.getDate()+1);
    }
  }

  ngOnInit(): void {
  }

}

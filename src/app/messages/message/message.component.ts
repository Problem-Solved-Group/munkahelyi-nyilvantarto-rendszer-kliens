import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/services/interfaces/message.interface';
import { LocalDateTimePipe } from 'src/app/services/pipes/localdatetime.pipe';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message = null;

  constructor(public router: Router) {
   }

  ngOnInit(): void {
  }

}

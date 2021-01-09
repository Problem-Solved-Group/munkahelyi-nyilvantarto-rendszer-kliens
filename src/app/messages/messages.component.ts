import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  constructor(public ms: MessageService,
    public router:Router) { }

  ngOnInit(): void {
    this.ms.getSentMessages();
    this.ms.getReceivedMessages();
  }

}

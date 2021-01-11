import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/services/interfaces/message.interface';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message = null;

  constructor(public router: Router,
    private ms:MessageService) {
   }

  ngOnInit(): void {

  }

  clickOnMessage(message:Message){
    if(this.router.url === "/messages/received" && message.seen_at == null){
      this.ms.setSeen(message);
    }
  }
}

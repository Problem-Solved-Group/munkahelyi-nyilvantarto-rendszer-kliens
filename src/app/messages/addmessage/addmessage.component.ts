import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Message } from 'src/app/services/interfaces/message.interface';
import { MessageService } from 'src/app/services/message.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.scss']
})
export class AddmessageComponent implements OnInit {

  messageForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddmessageComponent>,
    public ps : ProfileService,
    private ms: MessageService
  ) {
    this.messageForm = this.formBuilder.group({
      title: [null, Validators.required],
      receiver: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.ps.getAllUser();
  }


  addMessage(messageForm: FormGroup) {
    if(messageForm.valid) {
      this.ms.sendMessage(messageForm.value);
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }
}

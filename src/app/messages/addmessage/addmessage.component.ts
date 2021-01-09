import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.scss']
})
export class AddmessageComponent implements OnInit {

  messageForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddmessageComponent>
  ) {
    this.messageForm = this.formBuilder.group({
      title: [null, Validators.required],
      receiver: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  addMessage(messageForm: FormGroup) {
    if(messageForm.valid) {
      console.log(messageForm.value);
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }
}

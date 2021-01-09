import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditannouncements',
  templateUrl: './addeditannouncements.component.html',
  styleUrls: ['./addeditannouncements.component.scss']
})
export class AddEditannouncementsComponent implements OnInit {

  announcementForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditannouncementsComponent>
  ) {
    this.announcementForm = this.formBuilder.group({
      name: [null,[Validators.required]],
      showUntil: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  editAnnouncement(announcementForm : FormGroup) {
    if(announcementForm.valid) {
      console.log(announcementForm.value);
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }
}
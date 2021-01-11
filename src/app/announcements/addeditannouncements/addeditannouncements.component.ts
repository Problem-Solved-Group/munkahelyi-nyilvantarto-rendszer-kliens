import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announcement } from 'src/app/services/interfaces/announcement.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-addeditannouncements',
  templateUrl: './addeditannouncements.component.html',
  styleUrls: ['./addeditannouncements.component.scss']
})
export class AddEditannouncementsComponent implements OnInit {

  announcementForm : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditannouncementsComponent>,
    private ass : AnnouncementService,
    private ns : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Announcement) {
      if(data){
        this.announcementForm = this.formBuilder.group({
          title: [data.title,Validators.required],
          showUntil: [ data.showUntil.replace(' ', 'T'), Validators.required],
          message: [data.message,Validators.required]
        });
      }
      else {
        this.announcementForm = this.formBuilder.group({
          title: [null ,Validators.required],
          showUntil: [null, Validators.required],
          message: [null,Validators.required]
        });
      }
  }

  ngOnInit(): void {
  }

  createAnnouncement(announcementForm : FormGroup) {
    const now = Date.now();
    if(announcementForm.valid && Date.parse(announcementForm.value.showUntil) > now) {
      this.ass.createAnnouncement(announcementForm.value);
      setTimeout(() => {this.dialogRef.close();},500);
    }
    else{
      this.ns.show("Figyelmeztetés: A jelenlegi dátumnál régebbi lejárú hirdermények nem látszanak!");
    }
  }

  editAnnouncement(announcementForm : FormGroup) {
    const now = Date.now();
    if(announcementForm.valid && Date.parse(announcementForm.value.showUntil) > now) {
      this.ass.editAnnouncement(announcementForm.value, this.data.id);
      setTimeout(() => {this.dialogRef.close();},500);
    }
    else{
      this.ns.show("Figyelmeztetés: A jelenlegi dátumnál régebbi lejárú hirdermények nem látszanak!");
    }
  }
  
  deleteAnnouncement(){
    this.ass.deleteAnnouncement(this.data.id);
  }
}
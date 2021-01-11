import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Announcement } from 'src/app/services/interfaces/announcement.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { AddEditannouncementsComponent } from '../addeditannouncements/addeditannouncements.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input() announcement: Announcement = null;

  constructor(public dialog: MatDialog,
    public ps : ProfileService) { 
  }

  ngOnInit(): void {
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AddEditannouncementsComponent, {width:'750px' , data: this.announcement});
  }

  isUserAllowedToModify() : boolean {
    return JSON.stringify(this.ps.currentUser$.value) === JSON.stringify(this.announcement.user) || this.ps.currentUser$.value.role === "ROLE_ADMIN";
  }
}

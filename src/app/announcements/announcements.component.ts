import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementService } from '../services/announcement.service';
import { ProfileService } from '../services/profile.service';
import { AddEditannouncementsComponent } from './addeditannouncements/addeditannouncements.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  constructor(public ass : AnnouncementService,public dialog: MatDialog,public ps: ProfileService) {
      this.ps.getCurrentUser();
   }

  ngOnInit(): void {
    this.ass.getAvailableAnnouncements();
  }


  openAddAnouncementDialog() {
    const dialogRef = this.dialog.open(AddEditannouncementsComponent, {width:'750px'});
  }

  isUserAllowedToCreate() {
    return this.ps.currentUser$["role"] !== "ROLE_WORKER";
  }
}

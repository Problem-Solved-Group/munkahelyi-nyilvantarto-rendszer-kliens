import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditannouncementsComponent } from './addeditannouncements/addeditannouncements.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openAddAnouncementDialog() {
    const dialogRef = this.dialog.open(AddEditannouncementsComponent, {width:'750px'});
  }
}

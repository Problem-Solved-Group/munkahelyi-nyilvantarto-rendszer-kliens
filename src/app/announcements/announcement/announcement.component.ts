import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditannouncementsComponent } from '../addeditannouncements/addeditannouncements.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AddEditannouncementsComponent, {width:'750px'});
  }
}

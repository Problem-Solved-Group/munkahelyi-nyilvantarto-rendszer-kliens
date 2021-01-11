import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from '../services/profile.service';
import { EditprofileComponent } from './editprofile/editprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog : MatDialog,public ps : ProfileService) { }

  ngOnInit(): void {
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditprofileComponent, {width:'750px'});
  }
}

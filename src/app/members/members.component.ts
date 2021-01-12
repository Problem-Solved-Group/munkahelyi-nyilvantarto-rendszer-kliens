import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { User } from '../services/interfaces/user.interface';
import { ProfileService } from '../services/profile.service';
import { EditmemberComponent } from './editmember/editmember.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  constructor(public dialog: MatDialog,public ps:ProfileService) {}

  ngOnInit(): void {
  }

  openEditDialog(data:User): void {
    const dialogRef = this.dialog.open(EditmemberComponent, {width:'750px' , data});
  }
}

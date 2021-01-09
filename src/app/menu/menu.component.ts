import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmessageComponent } from '../messages/addmessage/addmessage.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private as : AuthService) { }

  ngOnInit(): void {
  }


  openNewMessageDialog() {
    const dialogRef = this.dialog.open(AddmessageComponent, {width:'750px'});
  }
  logout() {
    this.as.logout();
  }
}

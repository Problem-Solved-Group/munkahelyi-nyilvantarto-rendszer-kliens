import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmessageComponent } from '../messages/addmessage/addmessage.component';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { ProfileService } from '../services/profile.service';
import { SiteService } from '../services/site.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private as : AuthService,
    public ms: MessageService, 
    public ps: ProfileService,
    public ss: SiteService) 
  {
    /*setInterval(() => {
      this.ms.getSentMessages();
      this.ms.getReceivedMessages();
    },15000);
    */
  }

  ngOnInit(): void {
    this.ps.getCurrentUser();
    this.ps.getAllUser();
    this.ms.getSentMessages();
    this.ms.getReceivedMessages();
    this.ss.getSites();
  }

  getUnseenMessages() : number {
    return this.ms.receivedMessages$.value.filter(e => e.seen_at === null).length;
  }
  openNewMessageDialog() {
    const dialogRef = this.dialog.open(AddmessageComponent, {width:'750px'});
  }
  logout() {
    this.as.logout();
  }

  isUserAllowedToAdminPage() {
    return this.ps.currentUser$.value?.role !== "ROLE_WORKER";
  }
}

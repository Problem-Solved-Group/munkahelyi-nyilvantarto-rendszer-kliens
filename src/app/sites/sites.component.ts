import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Site } from '../services/interfaces/site.interface';
import { ProfileService } from '../services/profile.service';
import { SiteService } from '../services/site.services';
import { AddeditsiteComponent } from './addeditsite/addeditsite.component';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  constructor(public dialog: MatDialog,public ps : ProfileService,public ss: SiteService) { }

  ngOnInit(): void {
    
  }

  isUserAllowedToCreate() {
    return this.ps.currentUser$.value?.role === 'ROLE_ADMIN';
  }

  openEditDialog(data:Site) {
    const dialogRef = this.dialog.open(AddeditsiteComponent, {width:'750px' , data});
  }
}

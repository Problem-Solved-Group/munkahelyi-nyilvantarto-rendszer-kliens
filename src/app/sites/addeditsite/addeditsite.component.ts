import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Site } from 'src/app/services/interfaces/site.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { SiteService } from 'src/app/services/site.services';

@Component({
  selector: 'app-addeditsite',
  templateUrl: './addeditsite.component.html',
  styleUrls: ['./addeditsite.component.scss']
})
export class AddeditsiteComponent implements OnInit {

  siteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public ss : SiteService,
    public ps : ProfileService,
    public dialogRef: MatDialogRef<AddeditsiteComponent>,
    @Inject(MAT_DIALOG_DATA)public data: Site
  ) {
    if(data) {
      this.siteForm = this.formBuilder.group({
        name: [data.name, Validators.required],
        location: [data.location, Validators.required]
      });
    } else {
      this.siteForm = this.formBuilder.group({
        name: [null, Validators.required],
        location: [null, Validators.required]
      });
    }
  }

  ngOnInit(): void {
  }


  addSite(siteForm : FormGroup) {
    if(siteForm.valid) {
      if(this.data === null) {
        this.ss.createSite(siteForm.value);
      } else {
        this.ss.editSite(this.data.id , siteForm.value);
      }
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }

  deleteSite(){
    this.ss.deleteSite(this.data.id);
    setTimeout(() => {this.dialogRef.close();},500);
  }
}

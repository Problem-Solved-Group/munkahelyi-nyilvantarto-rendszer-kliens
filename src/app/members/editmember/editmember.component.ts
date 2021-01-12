import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Site } from 'src/app/services/interfaces/site.interface';
import { User } from 'src/app/services/interfaces/user.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { SiteService } from 'src/app/services/site.services';
@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.scss']
})
export class EditmemberComponent implements OnInit {

  public selected: number[] = [];

  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditmemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public ss: SiteService,
    public ps: ProfileService
  ) {
    this.selected = this.data.sites.map(e => e.id);
    this.userForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.email, Validators.required]],
      role: [data.role, Validators.required],
      sites: [null]
    });
  }

  ngOnInit(): void {
    
  }

  editProfile(userForm: FormGroup) {
    if(userForm.valid) {
      let user = userForm.value 
      user.sites = this.ss.sites$.getValue().filter(e => user.sites.includes(e.id));
      this.ps.updateUser(this.data.id,user);
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditprofileComponent>
  ) {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      role: [null, Validators.required],
      sites: []
    });
  }

  ngOnInit(): void {
  }


  editProfile(userForm: FormGroup) {
    if(userForm.valid) {
      console.log("hello");
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }

}

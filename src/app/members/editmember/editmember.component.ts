import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.scss']
})
export class EditmemberComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditmemberComponent>
  ) {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      role: [null, Validators.required],
      site: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  editProfile(userForm: FormGroup) {
    if(userForm.valid) {
      console.log(userForm.value);
      setTimeout(() => {this.dialogRef.close();},500);
    }
  }
}

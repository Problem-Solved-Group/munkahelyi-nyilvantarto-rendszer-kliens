import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
      this.registrationForm = this.formBuilder.group({
        name:[null,Validators.required],
        username: [null,Validators.required],
        email: [null, [Validators.email, Validators.required]],
        password: [null, Validators.required],
        passwordre: [null, Validators.required]
      });
   }

  ngOnInit(): void {
  }

}

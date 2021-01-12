import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private as: AuthService,private ns:NotificationService) {
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

  register(registrationForm : FormGroup){
    if(registrationForm.valid){
      if(registrationForm.value.password === registrationForm.value.passwordre){
        delete registrationForm.value.passwordre;
        this.as.register(registrationForm.value);
      }
      else{
        this.ns.show("A két jelszó nem egyezik meg!");
      }
    }
  }
}

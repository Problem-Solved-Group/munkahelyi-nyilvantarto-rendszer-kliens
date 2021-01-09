import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder : FormBuilder,
    protected as: AuthService,
    protected ns: NotificationService) {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });

   }

  ngOnInit(): void {

  }

  signin(form: FormGroup): void {
    if (form.valid) {
      console.log(form.value);
      this.as.login(<any>form.value);
    }
    else {
      this.ns.show('HIBA! Adatok nem megfelelőek!');
    }
  }

}

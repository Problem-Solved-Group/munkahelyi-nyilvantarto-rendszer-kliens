import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unseen-request',
  templateUrl: './unseen-request.component.html',
  styleUrls: ['./unseen-request.component.scss']
})
export class UnseenRequestComponent implements OnInit {

  dateGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.dateGroup = this.formBuilder.group({
      date: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  list(dateGroup) {
    
  }
}

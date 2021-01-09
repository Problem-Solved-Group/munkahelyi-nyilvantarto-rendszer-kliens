import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditannouncementsComponent } from './addeditannouncements.component';

describe('EditannouncementsComponent', () => {
  let component: AddEditannouncementsComponent;
  let fixture: ComponentFixture<AddEditannouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditannouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditannouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

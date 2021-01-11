import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingtimesComponent } from './workingtimes.component';

describe('WorkingtimesComponent', () => {
  let component: WorkingtimesComponent;
  let fixture: ComponentFixture<WorkingtimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingtimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenRequestComponent } from './unseen-request.component';

describe('UnseenRequestComponent', () => {
  let component: UnseenRequestComponent;
  let fixture: ComponentFixture<UnseenRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnseenRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnseenRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

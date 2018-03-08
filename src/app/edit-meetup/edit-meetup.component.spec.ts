import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeetupComponent } from './edit-meetup.component';

describe('EditMeetupComponent', () => {
  let component: EditMeetupComponent;
  let fixture: ComponentFixture<EditMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

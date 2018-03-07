import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupListComponent } from './meetup-list.component';

describe('UserListComponent', () => {
  let component: MeetupListComponent;
  let fixture: ComponentFixture<MeetupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

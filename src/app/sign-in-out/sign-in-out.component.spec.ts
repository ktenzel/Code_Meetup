import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOutComponent } from './sign-in-out.component';

describe('SignInOutComponent', () => {
  let component: SignInOutComponent;
  let fixture: ComponentFixture<SignInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

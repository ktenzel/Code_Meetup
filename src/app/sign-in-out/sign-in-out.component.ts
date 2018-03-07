import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css'],
  providers: [AuthenticationService]
})
export class SignInOutComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [AuthenticationService, UserService]
})
export class UserProfileComponent {

  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) { }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user.model';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css'],
  providers: [AuthenticationService, UserService]
})
export class SignInOutComponent implements OnInit {
  currentUser: User;

  constructor(public authService: AuthenticationService, private userService: UserService, private router: Router) { }

  googleSignIn() {
    this.authService.googleSignIn();
      // .then((response) => {
      //   console.log(response);
      //   this.router.navigate(['/']);
      // })
      // .catch((error) => console.log(error));

  }


  ngOnInit() {}

}

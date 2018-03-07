import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserService]
})
export class AppComponent {
  user;
  private currentUser: User;
  private uid: string;

  constructor(public authService: AuthenticationService, public userService: UserService, private router: Router) { }

  googleSignIn() {
    this.authService.login()
      .then((response) => {
        this.router.navigate(['/']);
      })
      .catch((error) => console.log(error));
  }
}

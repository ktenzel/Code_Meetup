import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      // this.authService.isLoggedIn() ? this.router.navigate(['user-profile']) : this.router.navigate(['/']);
    });
   }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      // console.log(this.authService.currentUser.uid);
    });
   }

}

import { Component } from '@angular/core';

import { Meetup } from '../models/meetup.model';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { MeetupsService } from '../services/meetups.service';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [AuthenticationService, UserService, MeetupsService]
})
export class NewMeetupComponent  {
  creator;

  constructor(private authService: AuthenticationService, private userService: UserService, private meetupsService: MeetupsService) {
    this.authService.user.subscribe(() => {
      this.creator = this.userService.getCurrentUser();
    });
  }

  submitForm(language: string, skillLevel: string, location: string, creatorUID: string, creatorName: string, creatorEmail: string) {
    var newMeetup: Meetup = new Meetup(language, skillLevel, location, this.creator.uid, this.creator.displayName, this.creator.email);
    this.meetupsService.addMeetup(newMeetup);
    alert("Meetup Added!");

  }
}

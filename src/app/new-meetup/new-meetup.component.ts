import { Component } from '@angular/core';

import { Meetup } from '../models/meetup.model';
import { MeetupsService } from '../services/meetups.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [UserService, MeetupsService]
})
export class NewMeetupComponent  {
  createdBy = this.userService.getCurrentUserUID();

  constructor(private userService: UserService, private meetupsService: MeetupsService) { }

  submitForm(language: string, skillLevel: string, location: string, createdBy: string) {
    var newMeetup: Meetup = new Meetup(language, skillLevel, location, this.createdBy);
    this.meetupsService.addMeetup(newMeetup);
    alert("Meetup Added!");

  }
}

import { Component } from '@angular/core';

import { Meetup } from '../models/meetup.model';
import { MeetupsService } from '../services/meetups.service';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [MeetupsService]
})
export class NewMeetupComponent  {

  constructor(private meetupsService: MeetupsService) { }

  submitForm(language: string, skillLevel: string, location: string) {
    var newMeetup: Meetup = new Meetup(language, skillLevel, location);
    this.meetupsService.addMeetup(newMeetup);
    alert("Meetup Added!")
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meetup } from '../meetup.model';
import { User } from '../user.model';
import { MEETUP } from '../mock-meetup';
import { MeetupsService } from '../meetups.service';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [MeetupsService]
})
export class NewMeetupComponent implements OnInit {

  submitForm(language: string, skillLevel: string, location: string) {
    var newMeetup: Meetup = new Meetup(language, skillLevel, location);
    this.meetupsService.addMeetup(newMeetup);
    alert("Meetup Added!");
  }


  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meetup } from '../meetup.model';
import { User } from '../user.model';
import { MEETUP } from '../mock-meetup';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css']
})
export class NewMeetupComponent implements OnInit {
  meetup: Meetup[] = [];

  // submitForm(language: string, project: string, reviewMaterial: string, users: string) {
  //   var newMeetupToAdd: Meetup = new Meetup( language, project, reviewMaterial, users);
  //   this.meetup.push(newMeetupToAdd);
  //   alert("Meetup Added!")
  // }


  constructor() { }

  ngOnInit() {
  }

}

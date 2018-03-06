import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meetup } from '../meetup.model';
import { User } from '../user.model';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css']
})
export class NewMeetupComponent implements OnInit {
  @Output() newMeetupSender = new EventEmitter();

  submitForm(language: string, project: string[], reviewMaterial: string[], users: User[]) {
    var newMeetupToAdd: Meetup = new Meetup( language, project, reviewMaterial, users);
    this.newMeetupSender.emit(newMeetupToAdd);
    alert("Meetup Added!")
  }


  constructor() { }

  ngOnInit() {
  }

}

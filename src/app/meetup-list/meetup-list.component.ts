import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { Meetup } from '../models/meetup.model';
import { NewMeetupComponent } from '../new-meetup/new-meetup.component';
import { MeetupsService } from '../services/meetups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css'],
  providers: [MeetupsService]
})
export class MeetupListComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private meetupsService: MeetupsService, private router: Router) { }

  ngOnInit() {
    this.meetups = this.meetupsService.getMeetups();
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../services/authentication.service';
import { Meetup } from '../models/meetup.model';
import { NewMeetupComponent } from '../new-meetup/new-meetup.component';
import { MeetupsService } from '../services/meetups.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LESSONS } from '../mock-lessons';
import { LessonService } from '../services/lesson.service';


@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css'],
  providers: [MeetupsService, UserService, LessonService]
})

export class MeetupListComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private meetupsService: MeetupsService, public authService: AuthenticationService) {
    this.authService.user.subscribe(() => {
      console.log(this.authService.currentUser.uid);
    });
  }

  ngOnInit() {
    this.meetups = this.meetupsService.getMeetups();
  }
}

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
import { UserService } from '../services/user.service';
import { LESSONS } from '../mock-lessons';


@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css'],
  providers: [MeetupsService, UserService]
})
export class MeetupListComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  meetupId: number;

  constructor(private meetupsService: MeetupsService, private router: Router, public authService: AuthenticationService, private route: ActivatedRoute) {
    this.authService.user.subscribe(user => {
          if (user == null) {
            this.isLoggedIn = false;
            // this.router.navigate(['public']);
          } else {
            this.isLoggedIn = true;
            this.userName = user.displayName;
            this.router.navigate([]);
          }
        });


   }

  ngOnInit() {
    this.meetups = this.meetupsService.getMeetups();
    this.route.params.forEach((urlParameters) => {
     this.meetupId = parseInt(urlParameters['id']);
   });
 }
}

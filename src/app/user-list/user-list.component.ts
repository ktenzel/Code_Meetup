import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MeetupsService } from '../meetups.service';
import { Meetup } from '../meetup.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [MeetupsService]
})
export class UserListComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;

  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
    this.meetups = this.meetupsService.getMeetups();
  }
}

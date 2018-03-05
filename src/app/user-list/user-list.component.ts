import { Component, OnInit } from '@angular/core';

import { MeetupsService } from '../meetups.service';
import { Meetup } from '../meetup.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [MeetupsService]
})
export class UserListComponent implements OnInit {
  meetups: Meetup[];

  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
    this.meetups = this.meetupsService.getMeetups();
  }

}

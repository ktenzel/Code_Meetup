import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { USERS } from '../mock-users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    // this.users = this.userService.getUsers();
  }

}

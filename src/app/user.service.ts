import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return USERS;
  }

  getUserById(userId: number){
    for (var i = 0; i <= USERS.length -1; i++) {
      if (USERS[i].id === userId) {
        return USERS[i];
      }
    }
  }

}

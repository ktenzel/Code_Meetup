import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from './user.model';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  userExists: Boolean = true;

  constructor(private db: AngularFireDatabase) {
    this.users = db.list('users');
  }

  getUsers() {
    return this.users;
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.users = db.list('users');
  }

  getUsers() {
    return this.users;
  }
}

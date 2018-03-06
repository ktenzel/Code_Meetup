import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { User } from './user.model';
// import { USERS } from './mock-users';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  // userUidRef = firebase.database.ref("users");
  constructor(private db: AngularFireDatabase) {
    this.users = db.list('users');
  }

  getUsers() {
    return this.users;
  }

  createUser(newUser: User) {
    // this.users.push(newUser);
    // this.users.update(user, { createdOn: firebase.database.ServerValue.TIMESTAMP });

    this.users.$ref.orderByKey().on("child_added", (user) => {
      if (newUser.uid != user.val().uid) {
        this.users.push(newUser);
        this.users.update(user, { createdOn: firebase.database.ServerValue.TIMESTAMP });
      }
    });

    // this.users.$ref.orderByKey().limitToLast(1).on("child_added", (user) => {
    //   this.users.update(user, { createdOn: firebase.database.ServerValue.TIMESTAMP });
    // });
  }
}

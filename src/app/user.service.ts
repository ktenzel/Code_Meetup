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

  createUser(newUser: User) {
    this.users.$ref.orderByKey().on('child_added', (snapshot) => {
      if (newUser.uid != snapshot.val().uid) {
        this.userExists = false;
      } else {
        this.userExists = true;
        console.log('User Exists!');
      }
    });

    if (this.userExists == false) {
      this.users.push(newUser);
    } else {
      alert('User Already Exists!');
    }

    this.users.$ref.orderByKey().limitToLast(1).on("child_added", (user) => {
      this.users.update(user, { createdOn: firebase.database.ServerValue.TIMESTAMP });
    });
  }
}

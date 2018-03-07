import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from './user.model';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  userExists: Boolean = true;
  // userUidRef = firebase.database.ref("users");
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

    if (this.userExists === false) {
      this.users.push(newUser);
    } else {
      alert('User Already Exists!');
    }

    // this.users.$ref.once('value').then((snapshot) => {
      // console.log(`snapshot: ${snapshot.key}`);
      // snapshot.forEach((user) => {
      //   console.log(`forEach: ${user.val().uid}`);
      //   if (newUser.uid != user.val().uid) {
      //     this.users.push(newUser);
      //     console.log("User Doesn't Exist!");
      //   } else {
      //     console.log("User Exist");
      //   }
      // });
      // if(newUser.uid != user.val())
      // console.log(newUser.uid);
    // });
    // this.users.update(newUser, { createdOn: firebase.database.ServerValue.TIMESTAMP });
    // this.users.$ref.orderByKey().on("child_added", (user) => {
    //   this.users.push(newUser);
    //   this.users.update(newUser, { createdOn: firebase.database.ServerValue.TIMESTAMP });
    // //   if (newUser.uid != user.val().uid) {
    // //     this.users.push(newUser);
    // //     this.users.update(user, { createdOn: firebase.database.ServerValue.TIMESTAMP });
    // //   }
    // });

    this.users.$ref.orderByKey().limitToLast(1).on("child_added", (user) => {
      this.users.update(user, { createdOn: firebase.database.ServerValue.TIMESTAMP });
    });
  }
}

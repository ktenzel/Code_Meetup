import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private authService: AuthenticationService) {
    this.users = db.list('users');
  }

  getCurrentUser() {
    return this.authService.currentUser;
  }

  // getMeetupByUid(){
  //   let currentUserUID = this.getCurrentUserUID();
  //
  //    this.users.$ref.orderByKey().on("child_added", (snapshot) => {
  //     console.log(snapshot.key);
  //     if (currentUserUID === snapshot.key) {
  //       let createdByName = snapshot.val().name;
  //       let createdByEmail = snapshot.val().email;
  //       console.log(createdByEmail, createdByName)
  //
  //
  //
  //       return createdByName && createdByEmail;
  //     }
  //   });
  // }
}

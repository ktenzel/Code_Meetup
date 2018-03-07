import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private authService: AuthenticationService) {
    this.users = db.list('users');
  }

  getCurrentUserUID() {
    return this.authService.currentUser.uid;
  }
}

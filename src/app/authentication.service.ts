import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { User } from './user.model';
import { UserService } from './user.service';


@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router, public userService: UserService) {
    this.user = afAuth.authState;

    this.user.subscribe(user =>  {
      if(user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });

  }

	// createAccount(email, password) {
	// 	const credential = firebase.auth.EmailAuthProvider.credential(email, password);
	// 	return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
	// }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        console.log(this.user.displayName);
        let currentUser = new User(this.user.displayName, null, null, this.user.uid);
        this.userService.createUser(currentUser);
      });
  }

  isLoggedIn() { return this.userDetails ? true : false; }

  logout() {
    this.afAuth.auth.signOut()
      .then((response) => this.router.navigate(['/']));
  }

}

import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe((currentUser) =>  {
      if(currentUser) {
        this.userDetails = currentUser;

          console.log(this.userDetails.uid);
      } else {
        this.userDetails = null;
      }
    });
  }

	createAccount(email, password) {
		const credential = firebase.auth.EmailAuthProvider.credential(email, password);
		return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
	}
  // this.authService.login();
  // this.currentUser = new User(this.userName, null, null, this.uid);
  // this.userService.createUser(this.currentUser);

  googleSignIn() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isLoggedIn() { return this.userDetails ? true : false; }

  logout() {
    this.afAuth.auth.signOut()
      .then((response) => this.router.navigate(['/']));
  }

}

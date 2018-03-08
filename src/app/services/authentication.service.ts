import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe(user =>  {
      if(user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  emailSignUp(name: string, email: string, password: string, url: string, language: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
        language: language,
        name: name,
        url: url
      }).catch(updatError => console.warn(`Error Updating user: ${updatError}`));
    }).catch(error => console.warn(error));
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => this.router.navigate(['user-profile']))
      .catch((error) => console.log(error));
  }

  isLoggedIn() {
    return this.currentUser ? true : false;
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((response) => this.router.navigate(['/']))
      .catch(logoutError => console.warn(`Logout Error ${logoutError}`));
  }

}

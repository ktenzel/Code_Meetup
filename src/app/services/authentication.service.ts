import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  email: string;
  password: string;

  constructor(private af: AngularFire, public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe(user =>  {
      if(user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });

  }
  emailSignUp(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
   return this.afAuth.authState.createUser(credentials)
     .then(() => console.log("success"))
     .catch(error => console.log(error));
 }

 emailLogin(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
    return this.afAuth.authState.login(credentials,
      { provider: AuthProviders.Password,
        method: AuthMethods.Password
       })
      .then(() => console.log("success"))
      .catch(error => console.log(error));
 }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => this.router.navigate(['user-profile']))
      .catch((error) => console.log(error));
  }

  isLoggedIn() { return this.userDetails ? true : false; }

  logout() {
    this.afAuth.auth.signOut()
      .then((response) => this.router.navigate(['/']));
  }

}

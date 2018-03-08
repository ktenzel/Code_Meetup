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
// newName.value, newEmail.value, newPassword.value, newLink.value, newLanguage.value
  emailSignUp(name: string, email: string, password: string, url: string, language: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        let cUser = firebase.auth().currentUser;

        cUser.updateProfile({
          displayName: name,
          photoURL: cUser.photoURL //'https://lh5.googleusercontent.com/-MJinLOQveVw/AAAAAAAAAAI/AAAAAAAAAAc/e_0_T9fV5Gw/photo.jpg'
        }).then(() => {
          firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
            language: language,
            name: name,
            url: url
          }).catch(error => console.warn(error));
        });
      }).catch(error => console.warn(error));
  }
  //firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

 //  emailSignUp(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
 //   return this.afAuth.authState.createUser(credentials)
 //     .then(() => console.log("success"))
 //     .catch(error => console.log(error));
 // }

 // emailLogin(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
 //    return this.afAuth.authState.login(credentials,
 //      { provider: AuthProviders.Password,
 //        method: AuthMethods.Password
 //       })
 //      .then(() => console.log("success"))
 //      .catch(error => console.log(error));
 // }

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
      .then((response) => this.router.navigate(['/']));
  }

}

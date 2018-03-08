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
      let cUser = firebase.auth().currentUser;
      cUser.updateProfile({
        displayName: name,
        photoURL: 'https://lh5.googleusercontent.com/-MJinLOQveVw/AAAAAAAAAAI/AAAAAAAAAAc/e_0_T9fV5Gw/photo.jpg'
      }).then(() => {
        firebase.database().ref('users/' + cUser.uid).update({
          bio: '',
          language: language,
          name: name,
          skillLevel: 'beginner',
          url: url
        }).catch(updatError => console.warn(`Error Updating user: ${updatError}`));
      }).catch(updateProfileError => console.log(updateProfileError));
    }).catch(error => console.warn(error));
  }

  emailSignIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(signInError => {
        console.warn(`Something went wrong: ${signInError}`);
      });
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => this.router.navigate(['user-profile']))
      .catch((error) => console.log(error));
  }

  updateUser(bio: string, language: string, skillLevel: string) {
    let cUser = firebase.auth().currentUser;

    firebase.database().ref('users/' + cUser.uid).update({
      bio: bio,
      language: language,
      skillLevel: skillLevel
    }).catch(updatError => console.warn(`Error Updating user: ${updatError}`));
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

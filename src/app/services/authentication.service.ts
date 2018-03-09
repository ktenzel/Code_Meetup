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

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      let cUser = firebase.auth().currentUser;
      let update = {};
      let userPropsUpdate = {
        bio: '',
        language: language,
        name: name,
        skillLevel: 'beginner',
        url: url
      };
      update['/users/' + cUser.uid] = userPropsUpdate;
      return firebase.database().ref().update(update);
    }).then(updateSuccess => {
      let cUser = firebase.auth().currentUser;
      cUser.updateProfile({
        displayName: name,
        photoURL: 'https://lh5.googleusercontent.com/-MJinLOQveVw/AAAAAAAAAAI/AAAAAAAAAAc/e_0_T9fV5Gw/photo.jpg'
      }).then(profileUpdateSuccess => {
        console.log(`updateProfile Success: ${profileUpdateSuccess}`);
      }).catch(profileUpdateError => console.log(`profileUpdate Error: ${profileUpdateError}`));
    }).catch(createError => console.warn(`Error creating account: ${createError}`));
  }

  emailSignIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(signInError => {
        console.warn(`Sign in error: ${signInError}`);
      });
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(success => this.router.navigate(['user-profile']))
      .catch(error => console.log(error));
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

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.createUserOnAuth = functions.auth.user().onCreate(event => {
  let timestamp = Date.now();
  const user = event.data;

  admin.database().ref('users/' + user.uid).set({
    createdOn: timestamp,
    email: user.email,
    language: '',
    name: user.displayName ? user.displayName : '',
    url: '',
    userPhoto: user.photoURL ? user.photoURL : 'https://lh5.googleusercontent.com/-MJinLOQveVw/AAAAAAAAAAI/AAAAAAAAAAc/e_0_T9fV5Gw/photo.jpg'
  });
});

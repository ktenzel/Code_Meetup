const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addUserToDB = functions.auth.user().onCreate(event => {
  let timestamp = Date.now();
  const user = event.data;

  admin.database().ref('users/' + user.uid).set({
    name: user.displayName,
    skill: '',
    language: '',
    email: user.email,
    userPhoto: user.photoURL,
    createdOn: timestamp
  });
});

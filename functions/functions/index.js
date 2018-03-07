const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addUserToDB = functions.auth.user().onCreate(event => {
  let timestamp = Date.now();
  
  admin.database().ref('users/' + event.data.uid).set({
    name: event.data.displayName,
    skill: '',
    language: '',
    createdOn: timestamp
  });
});

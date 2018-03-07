import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addUserToDB = functions.auth.user().onCreate(event => {
  admin.database().ref('/users/' + event.eventId).set({
    name: event.data.displayName,
    skill: null,
    language: null,
    uid: event.data.uid
  });
});

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Meetup } from '../models/meetup.model';

@Injectable()
export class MeetupsService {
  meetups: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.meetups = database.list('meetups');
  }

  getMeetups() {
    return this.meetups;
  }

  getMeetupById(meetupId: string){
    return this.database.object('meetups/' + meetupId);
  }

  addMeetup(newMeetup: Meetup) {
    this.meetups.push(newMeetup);
    this.meetups.$ref.orderByKey().limitToLast(1).on("child_added", (meetup) => {
      this.meetups.update(meetup, { startedAt: firebase.database.ServerValue.TIMESTAMP });
    });
  }

  updateMeetup(localUpdatedMeetup){
  var meetupEntryInFirebase = this.getMeetupById(localUpdatedMeetup.$key);
  meetupEntryInFirebase.update({language: localUpdatedMeetup.language,
                              skillLevel: localUpdatedMeetup.skillLevel});
                            }
}

import { Injectable } from '@angular/core';

import { Meetup } from './meetup.model';
import { MEETUP } from './mock-meetup';


@Injectable()
export class MeetupsService {
  meetup: Meetup;

  constructor() { }

  getMeetups() {
    return MEETUP;
  }
}

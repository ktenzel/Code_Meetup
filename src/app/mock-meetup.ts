import { Meetup } from './meetup.model';
import { User } from './user.model';
import { USERS } from './mock-users';

export const MEETUP: Meetup[] = [
  new Meetup('Javascript', ['Javascript Week 4', 'Javascript week 3'], USERS),
  new Meetup('Ruby', ['Ruby Week 2'], USERS)
];

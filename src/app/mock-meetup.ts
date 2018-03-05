import { Meetup } from './meetup.model';
import { User } from './user.model';
import { USERS } from './mock-users';

export const MEETUP: Meetup[] = [
  new Meetup('Javascript', ['Javascript Week 4 project', 'Javascript week 3 project'], ['Javascript Week 4 material', 'Javascript week 3 material'], USERS),
  new Meetup('Ruby', ['Ruby Week 2 project'], ['Ruby Week 2 material'], USERS)
];

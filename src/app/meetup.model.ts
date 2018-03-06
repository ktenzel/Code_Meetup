import { User } from './user.model';

export class Meetup {
  constructor(
    public language: string,
    public lesson: string[],
    public users: User[]
  ) {}
}

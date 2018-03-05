import { User } from './user.model';

export class Meetup {
  constructor(
    public language: string,
    public project: string[],
    public reviewMaterial: string[],
    public users: User[]
  ) {}
}

import { User } from './user.model';

export class Meetup {


  constructor(
    public language: string,
    public skillLevel: string,
    public location: string
    // Associate user that created the meetup
    // Users can then 'join' a meetup
  ) { }
}

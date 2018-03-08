import { User } from './user.model';

export class Meetup {


  constructor(
    public language: string,
    public skillLevel: string,
    public location: string,
    public creatorUID: string,
    public creatorName: string,
    public creatorEmail: string
    // Associate user that created the meetup
    // Users can then 'join' a meetup
  ) { }
}

import { Component, OnInit, Input } from '@angular/core';
import { MeetupsService } from '../services/meetups.service';

@Component({
  selector: 'app-edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.css'],
  providers: [MeetupsService]
})
export class EditMeetupComponent implements OnInit {
  @Input() selectedMeetup;
  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
  }

  beginUpdatingMeetup(meetupToUpdate){
    this.meetupsService.updateMeetup(meetupToUpdate);
  }

  beginDeletingMeetup(meetupToDelete){
    if(confirm("Are you sure you want to delete this meetup?")){
      this.meetupsService.deleteMeetup(meetupToDelete);
    }
  }

}

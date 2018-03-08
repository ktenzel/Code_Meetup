import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Lesson } from '../models/lesson.model';
import { LessonService } from '../services/lesson.service';
import { Router } from '@angular/router';
import { Meetup } from '../models/meetup.model';
import { MeetupsService } from '../services/meetups.service';


@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
  providers: [LessonService, MeetupsService]
})
export class LessonsListComponent implements OnInit {

  lessons = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private lessonService: LessonService,
    private meetupsService: MeetupsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
    // this.lessonToDisplay = this.lessonService.getLessonById(this.id);
  }


}

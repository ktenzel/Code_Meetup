import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { LESSONS } from '../mock-lessons';

@Injectable()
export class LessonService {

  constructor() { }

  getLessons() {
    return LESSONS;
  }

  // getLessonById(id: number) {
  //   for (var i = 0; i <= LESSONS.length - 1; i++) {
  //     if (LESSONS[i].id === id) {
  //       return LESSONS[i];
  //     }
  //   }
  //
  // }

}

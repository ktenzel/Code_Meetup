import { TestBed, inject } from '@angular/core/testing';

import { LessonService } from './lesson.service';

describe('LessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonService]
    });
  });

  it('should be created', inject([LessonService], (service: LessonService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { MeetupsService } from './meetups.service';

describe('MeetupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetupsService]
    });
  });

  it('should be created', inject([MeetupsService], (service: MeetupsService) => {
    expect(service).toBeTruthy();
  }));
});

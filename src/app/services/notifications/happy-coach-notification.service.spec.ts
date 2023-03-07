import { TestBed } from '@angular/core/testing';

import { HappyCoachNotificationService } from './happy-coach-notification.service';

describe('HappyCoachNotificationService', () => {
  let service: HappyCoachNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HappyCoachNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectServiceExampleService } from './behavior-subject-service-example.service';

describe('BehaviorSubjectServiceExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviorSubjectServiceExampleService = TestBed.get(BehaviorSubjectServiceExampleService);
    expect(service).toBeTruthy();
  });
});

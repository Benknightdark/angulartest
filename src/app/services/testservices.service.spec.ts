import { TestBed, inject } from '@angular/core/testing';

import { TestservicesService } from './testservices.service';

describe('TestservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestservicesService]
    });
  });

  it('should be created', inject([TestservicesService], (service: TestservicesService) => {
    expect(service).toBeTruthy();
  }));
});

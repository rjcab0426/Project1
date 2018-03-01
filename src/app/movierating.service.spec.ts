import { TestBed, inject } from '@angular/core/testing';

import { MovieratingService } from './movierating.service';

describe('MovieratingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieratingService]
    });
  });

  it('should be created', inject([MovieratingService], (service: MovieratingService) => {
    expect(service).toBeTruthy();
  }));
});

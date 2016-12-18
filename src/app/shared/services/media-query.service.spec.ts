/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaQueryService } from './media-query.service';

describe('MediaQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaQueryService]
    });
  });

  it('should ...', inject([MediaQueryService], (service: MediaQueryService) => {
    expect(service).toBeTruthy();
  }));
});

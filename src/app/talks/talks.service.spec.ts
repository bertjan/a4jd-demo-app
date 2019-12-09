import {TestBed} from '@angular/core/testing';

import {TalksService} from './talks.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TalksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]

  }));

  it('should be created', () => {
    const service: TalksService = TestBed.get(TalksService);
    expect(service).toBeTruthy();
  });
});

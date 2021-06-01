import { TestBed } from '@angular/core/testing';

import { CovidHttpService } from './covid-http.service';

describe('CovidHttpService', () => {
  let service: CovidHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

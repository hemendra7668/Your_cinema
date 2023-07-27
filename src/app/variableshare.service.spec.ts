import { TestBed } from '@angular/core/testing';

import { VariableshareService } from './variableshare.service';

describe('VariableshareService', () => {
  let service: VariableshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariableshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

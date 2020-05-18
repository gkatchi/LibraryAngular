import { TestBed } from '@angular/core/testing';

import { InvokeLibraryService } from './invoke-library.service';

describe('InvokeLibraryService', () => {
  let service: InvokeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvokeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

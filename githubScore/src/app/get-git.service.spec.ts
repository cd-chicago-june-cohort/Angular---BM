import { TestBed, inject } from '@angular/core/testing';

import { GetGitService } from './get-git.service';

describe('GetGitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGitService]
    });
  });

  it('should be created', inject([GetGitService], (service: GetGitService) => {
    expect(service).toBeTruthy();
  }));
});

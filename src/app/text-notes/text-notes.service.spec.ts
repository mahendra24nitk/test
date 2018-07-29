import { TestBed, inject } from '@angular/core/testing';

import { TextNotesService } from './text-notes.service';

describe('TextNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextNotesService]
    });
  });

  it('should be created', inject([TextNotesService], (service: TextNotesService) => {
    expect(service).toBeTruthy();
  }));
});

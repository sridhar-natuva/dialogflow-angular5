import { TestBed, inject } from '@angular/core/testing';

import { WatsonAPI } from './WatsonAPI.service';

describe('DialogflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatsonAPI]
    });
  });

  it('should be created', inject([WatsonAPI], (service: WatsonAPI) => {
    expect(service).toBeTruthy();
  }));
});

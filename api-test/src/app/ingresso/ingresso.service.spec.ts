import { TestBed, inject } from '@angular/core/testing';

import { IngressoService } from './ingresso.service';

describe('IngressoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngressoService]
    });
  });

  it('should be created', inject([IngressoService], (service: IngressoService) => {
    expect(service).toBeTruthy();
  }));
});

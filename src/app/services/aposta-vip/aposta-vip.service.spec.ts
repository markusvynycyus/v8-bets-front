import { TestBed } from '@angular/core/testing';

import { ApostaVipService } from './aposta-vip.service';

describe('ApostaVipService', () => {
  let service: ApostaVipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApostaVipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

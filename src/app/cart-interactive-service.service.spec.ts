import { TestBed } from '@angular/core/testing';

import { CartInteractiveServiceService } from './cart-interactive-service.service';

describe('CartInteractiveServiceService', () => {
  let service: CartInteractiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartInteractiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

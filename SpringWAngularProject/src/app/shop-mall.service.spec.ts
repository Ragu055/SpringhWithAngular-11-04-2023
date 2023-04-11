import { TestBed } from '@angular/core/testing';

import { ShopMallService } from './shop-mall.service';

describe('ShopMallService', () => {
  let service: ShopMallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopMallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MockedProductsService } from './mocked-products.service';

describe('MockedProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockedProductsService = TestBed.get(MockedProductsService);
    expect(service).toBeTruthy();
  });
});

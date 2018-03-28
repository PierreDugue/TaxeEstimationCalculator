import { TestBed, inject } from '@angular/core/testing';

import { TaxeCalculatorService } from './taxe-calculator.service';

describe('TaxeCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxeCalculatorService]
    });
  });

  it('should be created', inject([TaxeCalculatorService], (service: TaxeCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});

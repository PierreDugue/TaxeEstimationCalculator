import { TestBed, inject } from '@angular/core/testing';

import { TaxeCalculatorService } from './taxe-calculator.service';
import { userData } from '../models/userData-model';
import { AppModule } from '../app.module';


describe('TaxeCalculatorService', () => {
  let calculatorService: TaxeCalculatorService;
  let datas: userData;

  beforeAll(() => {
    this.datas = new userData();
    this.datas.gross = 50000;
    this.datas.superAnnuation = 10;
    this.datas.isIncludeSA = false;
  });

  beforeEach(() => {
    calculatorService = new TaxeCalculatorService();
  });

  it('should be created', () => {
    expect(calculatorService).toBeTruthy();
  });

  it('should return 5000', () => {
    expect(calculatorService.superAnnuationCalc(this.datas)).toBe(5000);
  });

  it('should return 5000', () => {
    expect(calculatorService.taxCalc(50000)).toBe(7497);
  });
});

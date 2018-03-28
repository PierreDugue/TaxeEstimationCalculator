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

  it('superAnnuationcalc should return 5000', () => {
    expect(calculatorService.superAnnuationCalc(this.datas)).toBe(5000);
  });

  it('taxCalc should return 7497', () => {
    expect(calculatorService.taxCalc(50000)).toBe(7497);
  });

  it('grossAmount should return 55000', () => {
    expect(calculatorService.grossAmount(this.datas)).toBe(55000);
  });

  it('netAmountCalc should return 42503', () => {
    expect(calculatorService.netAmountCalc(this.datas, false)).toBe(42503);
  });

});

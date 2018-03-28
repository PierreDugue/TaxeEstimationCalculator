import { Injectable } from '@angular/core';
import { calculatedAmounts } from '../models/calculatedAmounts-model'
import { userData } from '../models/userData-model';

const PERCENTAGE = 100;
@Injectable()
export class TaxeCalculatorService {

  public calculatedAmounts: calculatedAmounts;
  constructor() {
    this.calculatedAmounts = new calculatedAmounts();
  }

  calculation(userDatas: userData): calculatedAmounts {
    this.calculatedAmounts.superAnnuationAmount = this.superAnnuationCalc(userDatas);
    this.calculatedAmounts.grossAmount = this.grossAmount(userDatas);
    this.calculatedAmounts.tax = this.taxValueCalculation(userDatas.gross);
    return this.calculatedAmounts;
  }

  superAnnuationCalc(userDatas: userData) {
    return (userDatas.gross * userDatas.superAnnuation) / PERCENTAGE;
  }

  grossAmount(userDatas: userData) {
    if (userDatas.isIncludeSA) {

    } else {

    }
  }

  taxValueCalculation(gross: number) {
    if (gross < 18200) {
      return 0;
    } else if (gross < 37000) {
      return ((gross - 18200)*19)/PERCENTAGE;
    } else if (gross < 87000) {

    } else if (gross < 180000) {

    } else if (gross > 180001) {

    }
  }

}

import { Injectable } from '@angular/core';
import { calculatedAmounts } from '../models/calculatedAmounts-model'
import { userData } from '../models/userData-model';
import { taxValues, fixedAmount, percentage } from '../enums/taxValue-enum';

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
    this.calculatedAmounts.tax = this.taxValueCalculation(userDatas);
    this.calculatedAmounts.netAmount = this.netAmountCalc(userDatas, false);
    this.calculatedAmounts.netSA = this.netAmountCalc(userDatas, true);
    return this.calculatedAmounts;
  }

  /**
   * Calculate the SA amount
   * @param userDatas : datas provided by the user
   */
  superAnnuationCalc(userDatas: userData): number {
    return (userDatas.gross * userDatas.superAnnuation) / PERCENTAGE;
  }

  /**
   * Return the gross amount depending if the super is included or not
   * @param userDatas : datas provided by the user
   */
  grossAmount(userDatas: userData): number {
    if (userDatas.isIncludeSA) {
      return userDatas.gross - this.superAnnuationCalc(userDatas);
    } else {
      return +userDatas.gross + this.superAnnuationCalc(userDatas);
    }
  }

  /**
   * Return the net amount (with or without SA)
   * @param userDatas 
   */
  netAmountCalc(userDatas: userData, withSA: boolean): number {
    if (withSA) {
      if (userDatas.isIncludeSA) {
        return userDatas.gross - this.taxValueCalculation(userDatas);
      } else {
        return userDatas.gross - this.taxValueCalculation(userDatas) + this.superAnnuationCalc(userDatas);
      }
    } else {
      if (userDatas.isIncludeSA) {
        return userDatas.gross - this.superAnnuationCalc(userDatas) - this.taxValueCalculation(userDatas);
      } else {
        return userDatas.gross - this.taxValueCalculation(userDatas);
      }
    }
  }

  /**
   * Calculate the tax amount
   * @param userDatas : datas provided by the user
   */
  taxValueCalculation(userDatas: userData): number {
    switch (userDatas.isIncludeSA) {
      case false:
        return this.taxCalc(userDatas.gross);
      case true:
        return this.taxCalc(userDatas.gross - this.superAnnuationCalc(userDatas));
    }
  }

  taxCalc(gross): number {
    if (gross < taxValues.tiers1) {
      return fixedAmount.tiers0;
    } else if (gross < taxValues.tiers2) {
      return ((gross - taxValues.tiers1) * percentage.tiers1) / PERCENTAGE;
    } else if (gross < taxValues.tiers3) {
      return fixedAmount.tiers1 + ((gross - taxValues.tiers2) * percentage.tiers2) / PERCENTAGE;
    } else if (gross < taxValues.tiers4) {
      return fixedAmount.tiers2 + ((gross - taxValues.tiers3) * percentage.tiers3) / PERCENTAGE;
    } else if (gross > taxValues.tiers4) {
      return fixedAmount.tiers3 + ((gross - taxValues.tiers4) * percentage.tiers4) / PERCENTAGE;
    };
  }
}

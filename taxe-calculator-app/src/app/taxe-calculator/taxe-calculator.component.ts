import { Component, OnInit, OnChanges } from '@angular/core';
import { TaxeCalculatorService } from '../services/taxe-calculator.service';

import { userData } from '../models/userData-model';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';

import { calculatedAmounts } from '../models/calculatedAmounts-model';

@Component({
  selector: 'app-taxe-calculator',
  templateUrl: './taxe-calculator.component.html',
  styleUrls: ['./taxe-calculator.component.css']
})
export class TaxeCalculatorComponent implements OnInit {

  public calculatedAmounts: calculatedAmounts;
  private userDatas: userData;
  public datasForm: FormGroup;
  private superAnnuationCtrl: FormControl;
  private grossCtrl: FormControl;
  private isIncludeSACtrl: FormControl;

  constructor(private taxeCalculatorService: TaxeCalculatorService,
    private formBuilder: FormBuilder) {

    this.superAnnuationCtrl = new FormControl('', { validators: Validators.compose([Validators.required, this.isNumber(), this.minValue(9.5)]), updateOn: 'blur' });
    this.grossCtrl = formBuilder.control('', Validators.compose([Validators.required, this.isNumber(), this.minValue(1)]));

    this.datasForm = this.formBuilder.group({
      superAnnuation: this.superAnnuationCtrl,
      gross: this.grossCtrl,
      isIncludeSA: this.isIncludeSACtrl
    });
  }

  ngOnInit() {
    this.datasForm.setValue({
      superAnnuation: 9.5,
      gross: '',
      isIncludeSA: false
    })
    this.calculatedAmounts = new calculatedAmounts();
  }

  onSubmit() {
    this.calculatedAmounts = this.taxeCalculatorService.calculation(this.datasForm.value);
  }

  /**
   * Validator
   * @param {any} value : value of forme
   * @returns {ValidatorFn} : validation ok or not
   */
  minValue(value): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const input = control.value, isValid = input < value;
      if (isValid) {
        return { 'minValue': { value } };
      } else {
        return null;
      }
    };
  }


  isNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const input = control.value, isValid = isNaN(input);
      if (isValid) {
        return { 'isNan': { input } };
      } else {
        return null;
      }
    };
  }
}

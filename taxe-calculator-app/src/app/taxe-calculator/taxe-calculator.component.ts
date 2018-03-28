import { Component, OnInit, OnChanges } from '@angular/core';
import { TaxeCalculatorService } from '../services/taxe-calculator.service';

import { userData } from '../models/userData-model';
import { calculatedAmounts } from '../models/calculatedAmounts-model';

@Component({
  selector: 'app-taxe-calculator',
  templateUrl: './taxe-calculator.component.html',
  styleUrls: ['./taxe-calculator.component.css']
})
export class TaxeCalculatorComponent implements OnInit {

  private calculatedAmounts: calculatedAmounts;
  private userDatas: userData;

  constructor(private taxeCalculatorService: TaxeCalculatorService) { }

  ngOnInit() { 
    this.calculatedAmounts = new calculatedAmounts();
    this.userDatas = new userData();
    this.userDatas.isIncludeSA = false;
  }
  
  public calc(){
   this.calculatedAmounts = this.taxeCalculatorService.calculation(this.userDatas);
  }
}

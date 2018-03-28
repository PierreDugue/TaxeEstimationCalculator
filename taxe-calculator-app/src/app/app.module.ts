import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TaxeCalculatorComponent } from './taxe-calculator/taxe-calculator.component';
import { TaxeCalculatorService } from './services/taxe-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    TaxeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [TaxeCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

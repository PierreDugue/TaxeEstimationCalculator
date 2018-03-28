import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaxeCalculatorComponent } from './taxe-calculator/taxe-calculator.component';
import { TaxeCalculatorService } from './services/taxe-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    TaxeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaxeCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

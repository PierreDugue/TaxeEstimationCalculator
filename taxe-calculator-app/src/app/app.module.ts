import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TaxeCalculatorComponent } from './taxe-calculator/taxe-calculator.component';
import { TaxeCalculatorService } from './services/taxe-calculator.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TaxeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    FlexLayoutModule, 
    MatButtonModule 
  ],
  providers: [TaxeCalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeCalculatorComponent } from './taxe-calculator.component';
import { AppModule } from '../app.module';

describe('TaxeCalculatorComponent', () => {
  let component: TaxeCalculatorComponent;
  let fixture: ComponentFixture<TaxeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeCalculatorComponent } from './taxe-calculator.component';

describe('TaxeCalculatorComponent', () => {
  let component: TaxeCalculatorComponent;
  let fixture: ComponentFixture<TaxeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxeCalculatorComponent ]
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

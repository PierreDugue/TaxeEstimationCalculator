import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { TaxeCalculatorComponent } from './taxe-calculator.component';
import { AppModule } from '../app.module';
import { calculatedAmounts } from '../models/calculatedAmounts-model';

describe('TaxeCalculatorComponent', () => {
  let component: TaxeCalculatorComponent;
  let fixture: ComponentFixture<TaxeCalculatorComponent>;
  let calculatedAmounts: calculatedAmounts;
  let el: HTMLElement;

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


  it('should have inputs called formInput', () => {
    const inputSA: HTMLElement = fixture.nativeElement;
    const input = inputSA.getElementsByClassName('formInput');
    expect(input).toBeTruthy();
  });

  it('should not call the onSubmit methode', async () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should call the onSubmit methode', async () => {
    component.datasForm.controls['superAnnuation'].setValue(10);
    component.datasForm.controls['gross'].setValue(50000);
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should set submit to be true', () => {
    component.onSubmit();
    expect(component.calculatedAmounts).toBeTruthy();
  });


  it('should return falsy validators', async () => {
   component.datasForm.controls['superAnnuation'].setValue('');
   component.datasForm.controls['gross'].setValue('');
   expect(component.datasForm.valid).toBeFalsy();   
  });

  it('should return truthy validators', async () => {
   component.datasForm.controls['superAnnuation'].setValue(10);
   component.datasForm.controls['gross'].setValue(50000);
   expect(component.datasForm.valid).toBeTruthy();   
  });

});

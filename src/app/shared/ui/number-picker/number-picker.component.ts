import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ft-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NumberPickerComponent
    }
  ]
})
export class NumberPickerComponent implements ControlValueAccessor {
  @Input() step = 0.1;
  @Input() bigStep = 1;
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() label: string = "";

  value: number = 0;
  touched = false;
  disabled = false;

  onChange = (quantity : number) => {};
  onTouched = () => { };

  constructor() { 
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  increaseByStep() {
    //little hack for JS float math
    let valueTimes10 = this.value * 10 + this.step * 10;
    this.value = valueTimes10 / 10;
    this.ensureInRange();
    this.onValueChanged();
  }

  increaseByBigStep() {
    this.value += this.bigStep;
    this.ensureInRange();
    this.onValueChanged();
  }

  decreaseByStep() {
    //little hack for JS float math
    let valueTimes10 = this.value * 10 - this.step * 10;
    this.value = valueTimes10 / 10;
    this.ensureInRange();
    this.onValueChanged();
  }

  decreaseByBigStep() {
    this.value -= this.bigStep;
    this.ensureInRange();
    this.onValueChanged();
  }

  ensureInRange() {
    if (this.min && this.value < this.min) {
      this.value = this.min;
    } else if (this.max && this.value > this.max) {
      this.value = this.max;
    }
  }

  onValueChanged() {
    this.onChange(this.value);
    this.onTouched();
  }
}

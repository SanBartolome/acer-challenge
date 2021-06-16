import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type: string;
  @Input() placeholder = '';
  @Input() upperText = '';
  @Input() readonly = false;
  value$ = new BehaviorSubject(null);
  isDisabled$ = new BehaviorSubject(false);
  isFocused$ = new BehaviorSubject(false);
  onChange: (val: any) => void;
  onTouched: () => void;

  constructor() {}

  writeValue(obj: any): void {
    this.value$.next(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled$.next(isDisabled);
  }

  handleChange(value: any): void {
    this.value$.next(value);
    this.onChange(value);
  }

  handleFocus(): void {
    this.isFocused$.next(true);
  }

  handleBlur(): void {
    this.isFocused$.next(false);
    if (this.onTouched) {
      this.onTouched();
    }
  }

  ngOnInit(): void {}
}

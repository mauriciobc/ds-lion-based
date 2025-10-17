import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface DsButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

@Component({
  selector: 'ds-button',
  template: `
    <ds-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [type]="type"
      (click)="onClick($event)"
    >
      <ng-content></ng-content>
    </ds-button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsButtonComponent),
      multi: true
    }
  ]
})
export class DsButtonComponent implements ControlValueAccessor {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  
  @Output() click = new EventEmitter<MouseEvent>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  onClick(event: MouseEvent) {
    this.click.emit(event);
    this.onChange(event);
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    // Implementar se necessário
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

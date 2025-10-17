import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface DsButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
export declare class DsButtonComponent implements ControlValueAccessor {
    variant: 'primary' | 'secondary' | 'outline';
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    type: 'button' | 'submit' | 'reset';
    click: EventEmitter<MouseEvent>;
    private onChange;
    private onTouched;
    onClick(event: MouseEvent): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
//# sourceMappingURL=ds-button.component.d.ts.map
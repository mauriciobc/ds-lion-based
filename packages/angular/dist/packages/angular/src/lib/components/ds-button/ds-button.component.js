import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let DsButtonComponent = class DsButtonComponent {
    constructor() {
        this.variant = 'primary';
        this.size = 'md';
        this.disabled = false;
        this.type = 'button';
        this.click = new EventEmitter();
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    onClick(event) {
        this.click.emit(event);
        this.onChange(event);
    }
    // ControlValueAccessor implementation
    writeValue(value) {
        // Implementar se necessário
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DsButtonComponent.prototype, "variant", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DsButtonComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DsButtonComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DsButtonComponent.prototype, "type", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DsButtonComponent.prototype, "click", void 0);
DsButtonComponent = __decorate([
    Component({
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
], DsButtonComponent);
export { DsButtonComponent };
//# sourceMappingURL=ds-button.component.js.map
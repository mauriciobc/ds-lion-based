import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importar componentes
import { DsButtonComponent } from './components/ds-button/ds-button.component';
let DsAngularModule = class DsAngularModule {
};
DsAngularModule = __decorate([
    NgModule({
        declarations: [
            DsButtonComponent
        ],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [
            DsButtonComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], DsAngularModule);
export { DsAngularModule };
//# sourceMappingURL=ds-angular.module.js.map
import { h, Host } from "@stencil/core";
export class DsButton {
    constructor() {
        this.variant = 'primary';
        this.size = 'md';
        this.disabled = false;
        this.type = 'button';
    }
    render() {
        return (h(Host, { key: '872802d87a63c8523578b3711f33d1f31abac163' }, h("button", { key: '1bbb2f83c11cd8e3e4f7c1a2776d58350702faff', class: `btn btn--${this.variant} btn--${this.size}`, disabled: this.disabled, type: this.type }, h("slot", { key: '0fcaab2e382eb49c712d4846c8ba844f398ab6ad' }))));
    }
    static get is() { return "ds-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ds-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ds-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'outline'",
                    "resolved": "\"outline\" | \"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'button'"
            }
        };
    }
}
//# sourceMappingURL=ds-button.js.map

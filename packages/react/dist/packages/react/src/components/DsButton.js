import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
export const DsButton = (_a) => {
    var { variant = 'primary', size = 'md', disabled = false, type = 'button', children, onClick } = _a, props = __rest(_a, ["variant", "size", "disabled", "type", "children", "onClick"]);
    const buttonRef = useRef(null);
    useEffect(() => {
        // Definir os atributos do elemento
        if (buttonRef.current) {
            buttonRef.current.setAttribute('variant', variant);
            buttonRef.current.setAttribute('size', size);
            if (disabled) {
                buttonRef.current.setAttribute('disabled', '');
            }
        }
    }, [variant, size, disabled]);
    return (_jsx("ds-button", Object.assign({ ref: buttonRef, variant: variant, size: size, disabled: disabled, type: type, onClick: onClick }, props, { children: children })));
};
//# sourceMappingURL=DsButton.js.map
import React from 'react';
export interface DsButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ds-button': {
                variant?: string;
                size?: string;
                disabled?: boolean;
                type?: string;
                onClick?: (event: React.MouseEvent<HTMLElement>) => void;
                children?: React.ReactNode;
                ref?: React.Ref<HTMLElement>;
            };
        }
    }
}
export declare const DsButton: React.FC<DsButtonProps>;
//# sourceMappingURL=DsButton.d.ts.map
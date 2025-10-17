export interface DsButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
export declare const DsButton: {
    name: string;
    props: {
        variant: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
    };
    emits: string[];
    template: string;
};
//# sourceMappingURL=DsButton.d.ts.map
import React, { useRef, useEffect } from 'react';

export interface DsButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

// Declarar o elemento customizado para TypeScript
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

export const DsButton: React.FC<DsButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  children,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLElement>(null);

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

  return (
    <ds-button
      ref={buttonRef}
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </ds-button>
  );
};

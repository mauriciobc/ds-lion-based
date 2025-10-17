import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Importar o componente
import '../../../../packages/core/dist/ds-core/ds-core.esm.js';

const meta: Meta = {
  title: 'Components/Button',
  component: 'ds-button',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um botão versátil baseado em design tokens, com múltiplas variantes e tamanhos.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Variante visual do botão',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado do botão',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo do botão HTML',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
  },
  render: (args) => html`
    <ds-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      type=${args.type}
    >
      Botão Primário
    </ds-button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
    type: 'button',
  },
  render: (args) => html`
    <ds-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      type=${args.type}
    >
      Botão Secundário
    </ds-button>
  `,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    disabled: false,
    type: 'button',
  },
  render: (args) => html`
    <ds-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      type=${args.type}
    >
      Botão Outline
    </ds-button>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ds-button size="sm">Pequeno</ds-button>
      <ds-button size="md">Médio</ds-button>
      <ds-button size="lg">Grande</ds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tamanhos disponíveis para o botão.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ds-button variant="primary" disabled>Primário Desabilitado</ds-button>
      <ds-button variant="secondary" disabled>Secundário Desabilitado</ds-button>
      <ds-button variant="outline" disabled>Outline Desabilitado</ds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Estados desabilitados para todas as variantes.',
      },
    },
  },
};

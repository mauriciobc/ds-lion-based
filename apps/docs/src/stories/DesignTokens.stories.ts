import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Design tokens extraídos do Figma e transformados para múltiplas plataformas.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {
  render: () => html`
    <div style="padding: 24px;">
      <h2 style="margin-bottom: 24px; color: var(--color-neutral-900);">Cores</h2>
      
      <div style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: var(--color-neutral-800);">Primárias</h3>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;">
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-primary-50); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Primary 50</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-primary-200); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Primary 200</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-primary-500); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Primary 500</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-primary-700); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Primary 700</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-primary-900); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Primary 900</small>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: var(--color-neutral-800);">Neutras</h3>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;">
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-neutral-50); border-radius: 8px; margin-bottom: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <small style="color: var(--color-neutral-600);">Neutral 50</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-neutral-200); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Neutral 200</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-neutral-500); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Neutral 500</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-neutral-700); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Neutral 700</small>
          </div>
          <div style="text-align: center;">
            <div style="width: 100%; height: 60px; background-color: var(--color-neutral-900); border-radius: 8px; margin-bottom: 8px;"></div>
            <small style="color: var(--color-neutral-600);">Neutral 900</small>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Typography: Story = {
  render: () => html`
    <div style="padding: 24px;">
      <h2 style="margin-bottom: 24px; color: var(--color-neutral-900);">Tipografia</h2>
      
      <div style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: var(--color-neutral-800);">Tamanhos de Fonte</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="font-size: var(--typography-font-size-xs); color: var(--color-neutral-700);">Texto Extra Pequeno (12px)</div>
          <div style="font-size: var(--typography-font-size-sm); color: var(--color-neutral-700);">Texto Pequeno (14px)</div>
          <div style="font-size: var(--typography-font-size-base); color: var(--color-neutral-700);">Texto Base (16px)</div>
          <div style="font-size: var(--typography-font-size-lg); color: var(--color-neutral-700);">Texto Grande (18px)</div>
          <div style="font-size: var(--typography-font-size-xl); color: var(--color-neutral-700);">Texto Extra Grande (20px)</div>
          <div style="font-size: var(--typography-font-size-2xl); color: var(--color-neutral-700);">Título Pequeno (24px)</div>
          <div style="font-size: var(--typography-font-size-3xl); color: var(--color-neutral-700);">Título Médio (30px)</div>
          <div style="font-size: var(--typography-font-size-4xl); color: var(--color-neutral-700);">Título Grande (36px)</div>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: var(--color-neutral-800);">Pesos de Fonte</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="font-weight: var(--typography-font-weight-normal); color: var(--color-neutral-700);">Peso Normal (400)</div>
          <div style="font-weight: var(--typography-font-weight-medium); color: var(--color-neutral-700);">Peso Médio (500)</div>
          <div style="font-weight: var(--typography-font-weight-semibold); color: var(--color-neutral-700);">Peso Semi-Bold (600)</div>
          <div style="font-weight: var(--typography-font-weight-bold); color: var(--color-neutral-700);">Peso Bold (700)</div>
        </div>
      </div>
    </div>
  `,
};

export const Spacing: Story = {
  render: () => html`
    <div style="padding: 24px;">
      <h2 style="margin-bottom: 24px; color: var(--color-neutral-900);">Espaçamento</h2>
      
      <div style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: var(--color-neutral-800);">Tamanhos de Espaçamento</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-xs); height: var(--spacing-xs); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">XS - 4px</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-sm); height: var(--spacing-sm); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">SM - 8px</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-md); height: var(--spacing-md); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">MD - 16px</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-lg); height: var(--spacing-lg); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">LG - 24px</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-xl); height: var(--spacing-xl); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">XL - 32px</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-2xl); height: var(--spacing-2xl); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">2XL - 48px</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: var(--spacing-3xl); height: var(--spacing-3xl); background-color: var(--color-primary-500); border-radius: 2px;"></div>
            <span style="color: var(--color-neutral-700);">3XL - 64px</span>
          </div>
        </div>
      </div>
    </div>
  `,
};

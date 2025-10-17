import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|js|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    // Configuração para importar os design tokens
    config.css = {
      ...config.css,
      preprocessorOptions: {
        ...config.css?.preprocessorOptions,
        css: {
          additionalData: `@import "../../packages/tokens/dist/css/variables.css";`
        }
      }
    };

    return config;
  },
};

export default config;

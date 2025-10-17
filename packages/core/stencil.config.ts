import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ds-core',
  outputTargets: [
    // Web Components nativos
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // desabilitar service worker
    },
  ],
  // Configuração para integração com design tokens
  globalStyle: 'src/global/global.css',
  // Configuração de build
  buildEs5: 'prod',
  minifyJs: true,
  minifyCss: true,
  // Configuração de desenvolvimento
  devServer: {
    port: 3333,
    open: true,
  },
};

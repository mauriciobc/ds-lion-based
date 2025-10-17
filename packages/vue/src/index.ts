import { App } from 'vue';
import { DsButton } from './components/DsButton';

// Plugin para registrar todos os componentes
export const DsVuePlugin = {
  install(app: App) {
    app.component('DsButton', DsButton);
  }
};

// Exportar componentes individuais
export { DsButton };

// Exportar tipos
export type { DsButtonProps } from './components/DsButton';

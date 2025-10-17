import { DsButton } from './components/DsButton';
// Plugin para registrar todos os componentes
export const DsVuePlugin = {
    install(app) {
        app.component('DsButton', DsButton);
    }
};
// Exportar componentes individuais
export { DsButton };
//# sourceMappingURL=index.js.map
# Design System Lion-Based

Um design system moderno baseado em Lion Web Components com pipeline Figma-to-Code, wrappers para React, Vue e Angular, e documentação interativa com Storybook.

## 🏗️ Arquitetura

Este projeto segue a estratégia **Lion → Stencil → Wrappers**:

- **@ds/tokens**: Design tokens extraídos do Figma e transformados para múltiplas plataformas
- **@ds/core**: Componentes Stencil baseados em Lion Web Components
- **@ds/react**: Wrapper React para os componentes core
- **@ds/vue**: Wrapper Vue para os componentes core
- **@ds/angular**: Wrapper Angular para os componentes core
- **@ds/docs**: Documentação interativa com Storybook

## 🚀 Início Rápido

### Instalação

```bash
# Instalar dependências
pnpm install

# Build de todos os pacotes
pnpm build

# Executar Storybook
pnpm storybook
```

### Uso dos Componentes

#### React
```tsx
import { DsButton } from '@ds/react';

function App() {
  return (
    <DsButton variant="primary" size="md" onClick={() => console.log('clicked')}>
      Clique aqui
    </DsButton>
  );
}
```

#### Vue
```vue
<template>
  <DsButton variant="primary" size="md" @click="handleClick">
    Clique aqui
  </DsButton>
</template>

<script setup>
import { DsButton } from '@ds/vue';

const handleClick = () => {
  console.log('clicked');
};
</script>
```

#### Angular
```typescript
import { DsAngularModule } from '@ds/angular';

@NgModule({
  imports: [DsAngularModule],
  // ...
})
export class AppModule {}
```

```html
<ds-button variant="primary" size="md" (click)="handleClick()">
  Clique aqui
</ds-button>
```

## 🎨 Design Tokens

Os design tokens são extraídos automaticamente do Figma usando o plugin Figma Tokens e transformados usando Style Dictionary.

### Estrutura dos Tokens

```
packages/tokens/
├── src/tokens/          # Tokens brutos do Figma
│   ├── colors.json
│   ├── spacing.json
│   └── typography.json
└── dist/                # Tokens transformados
    ├── css/             # CSS Custom Properties
    ├── js/              # JavaScript/TypeScript
    └── json/            # JSON para documentação
```

### Uso dos Tokens

```css
/* CSS */
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--typography-font-size-base);
}
```

```javascript
// JavaScript
import { tokens } from '@ds/tokens';

const buttonStyle = {
  backgroundColor: tokens.color.primary[600],
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  fontSize: tokens.typography.fontSize.base
};
```

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev                 # Executa todos os projetos em modo watch
pnpm storybook          # Executa Storybook

# Build
pnpm build              # Build de todos os pacotes
pnpm build:tokens       # Build apenas dos tokens
pnpm build:core         # Build apenas do core
pnpm build:react        # Build apenas do wrapper React
pnpm build:vue          # Build apenas do wrapper Vue
pnpm build:angular      # Build apenas do wrapper Angular

# Testes
pnpm test               # Executa todos os testes
pnpm lint               # Executa linting

# Storybook
pnpm storybook          # Executa Storybook em modo desenvolvimento
pnpm build-storybook    # Build do Storybook para produção
```

### Estrutura do Projeto

```
ds-lion-based/
├── packages/
│   ├── tokens/          # Design tokens
│   ├── core/            # Componentes Stencil
│   ├── react/           # Wrapper React
│   ├── vue/             # Wrapper Vue
│   └── angular/         # Wrapper Angular
├── apps/
│   └── docs/            # Storybook
├── .github/
│   └── workflows/       # CI/CD
└── .changeset/          # Versionamento
```

## 📚 Documentação

A documentação completa está disponível no Storybook:

```bash
pnpm storybook
```

Acesse: http://localhost:6006

### Seções da Documentação

- **Design Tokens**: Visualização de cores, tipografia, espaçamento
- **Components**: Componentes interativos com controles
- **Guides**: Guias de uso e contribuição

## 🔄 Pipeline Figma-to-Code

1. **Figma Tokens**: Configure o plugin no seu projeto Figma
2. **Git Sync**: Configure a sincronização automática com o repositório
3. **Style Dictionary**: Transforma os tokens para múltiplas plataformas
4. **Build Automático**: Os tokens são integrados automaticamente aos componentes

## 🚀 Deploy e Publicação

### Chromatic (Testes Visuais)

Os testes visuais são executados automaticamente em cada PR usando Chromatic.

### NPM (Publicação)

Os pacotes são publicados automaticamente no NPM quando há mudanças no branch `main`.

### Versionamento

O versionamento é gerenciado automaticamente pelo Changesets:

```bash
# Criar um changeset
pnpm changeset

# Versionar pacotes
pnpm changeset version

# Publicar pacotes
pnpm changeset publish
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines

- Siga as convenções de commit do projeto
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use o Storybook para demonstrar suas mudanças

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- [Lion Web Components](https://lion-web.netlify.app/) - Base sólida para os componentes
- [Stencil](https://stenciljs.com/) - Framework para Web Components
- [Storybook](https://storybook.js.org/) - Documentação interativa
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Transformação de design tokens

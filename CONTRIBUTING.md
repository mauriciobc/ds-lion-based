# Guia de Contribuição

Obrigado por considerar contribuir para o Design System Lion-Based! Este documento fornece diretrizes e informações para contribuidores.

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- pnpm 9+
- Git

### Configuração do Ambiente

1. **Fork e Clone**
   ```bash
   git clone https://github.com/seu-usuario/ds-lion-based.git
   cd ds-lion-based
   ```

2. **Instalar Dependências**
   ```bash
   pnpm install
   ```

3. **Executar em Modo Desenvolvimento**
   ```bash
   pnpm dev
   ```

4. **Abrir Storybook**
   ```bash
   pnpm storybook
   ```

## 📋 Processo de Contribuição

### 1. Criando uma Issue

Antes de começar a trabalhar, crie uma issue descrevendo:
- O problema ou feature que você quer resolver
- Contexto e motivação
- Proposta de solução (se aplicável)

### 2. Criando uma Branch

```bash
# Criar branch a partir da main
git checkout main
git pull origin main
git checkout -b feature/nome-da-feature

# Ou para correções
git checkout -b fix/descricao-do-bug
```

### 3. Desenvolvendo

#### Para Novos Componentes

1. **Criar o componente no core** (`packages/core/src/components/`)
2. **Adicionar stories no Storybook** (`apps/docs/src/stories/`)
3. **Atualizar wrappers** (React, Vue, Angular)
4. **Adicionar testes**
5. **Atualizar documentação**

#### Para Design Tokens

1. **Atualizar tokens no Figma** (se aplicável)
2. **Sincronizar tokens** (`packages/tokens/src/tokens/`)
3. **Testar transformação** (`pnpm --filter @ds/tokens build`)
4. **Atualizar componentes** que usam os tokens

#### Para Documentação

1. **Atualizar stories** no Storybook
2. **Adicionar exemplos** de uso
3. **Atualizar README** se necessário

### 4. Testando

```bash
# Executar todos os testes
pnpm test

# Executar linting
pnpm lint

# Build de todos os pacotes
pnpm build

# Testar Storybook
pnpm build-storybook
```

### 5. Commit

Use mensagens de commit descritivas seguindo o padrão:

```
tipo(escopo): descrição breve

Descrição mais detalhada se necessário

Fixes #123
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, espaços, etc.
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Tarefas de manutenção

**Escopos:**
- `tokens`: Design tokens
- `core`: Componentes core
- `react`: Wrapper React
- `vue`: Wrapper Vue
- `angular`: Wrapper Angular
- `docs`: Documentação/Storybook
- `ci`: CI/CD

### 6. Pull Request

1. **Push da branch**
   ```bash
   git push origin feature/nome-da-feature
   ```

2. **Criar Pull Request**
   - Título descritivo
   - Descrição detalhada das mudanças
   - Link para issues relacionadas
   - Screenshots (se aplicável)

3. **Aguardar Review**
   - Responder a comentários
   - Fazer ajustes se necessário
   - Aguardar aprovação

## 🎨 Padrões de Código

### TypeScript

- Use TypeScript para todos os arquivos
- Defina interfaces claras
- Use tipos específicos em vez de `any`
- Documente funções complexas

### CSS

- Use design tokens sempre que possível
- Siga a metodologia BEM para classes
- Use CSS Custom Properties
- Mantenha especificidade baixa

### Componentes

- Um componente por arquivo
- Props bem tipadas
- Documentação JSDoc
- Exemplos no Storybook

### Stories (Storybook)

- Uma story por variante
- Controles interativos
- Documentação clara
- Exemplos de uso

## 🧪 Testes

### Estrutura de Testes

```
src/
├── components/
│   └── ds-button/
│       ├── ds-button.tsx
│       ├── ds-button.css
│       └── ds-button.spec.ts
```

### Escrevendo Testes

```typescript
import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from './ds-button';

describe('ds-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button>Click me</ds-button>`,
    });
    
    expect(page.root).toEqualHtml(`
      <ds-button>
        <button class="btn btn--primary btn--md">
          Click me
        </button>
      </ds-button>
    `);
  });
});
```

## 📚 Documentação

### Storybook

- **Stories**: Uma story por variante do componente
- **Controls**: Use controles para props importantes
- **Docs**: Documente comportamento e uso
- **Examples**: Mostre casos de uso reais

### README

- Mantenha atualizado
- Inclua exemplos de uso
- Documente APIs importantes
- Links para recursos externos

## 🔄 Design Tokens

### Adicionando Novos Tokens

1. **No Figma**: Adicione/atualize tokens
2. **Sincronize**: Use o plugin Figma Tokens
3. **Transforme**: `pnpm --filter @ds/tokens build`
4. **Use**: Nos componentes e documentação

### Estrutura de Tokens

```json
{
  "color": {
    "primary": {
      "50": { "value": "#f0f9ff" },
      "500": { "value": "#0ea5e9" },
      "900": { "value": "#0c4a6e" }
    }
  }
}
```

## 🚀 Release

### Versionamento

O versionamento é automático via Changesets:

```bash
# Criar changeset
pnpm changeset

# Versionar
pnpm changeset version

# Publicar
pnpm changeset publish
```

### Checklist de Release

- [ ] Todos os testes passando
- [ ] Build sem erros
- [ ] Documentação atualizada
- [ ] Changeset criado
- [ ] PR aprovado e merged

## 🆘 Dúvidas?

- **Issues**: Use o GitHub Issues para perguntas
- **Discussions**: Use GitHub Discussions para discussões
- **Email**: Entre em contato com a equipe

## 📝 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a Licença MIT.

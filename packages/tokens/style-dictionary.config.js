const StyleDictionary = require('style-dictionary');

// Configuração base
const baseConfig = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    // CSS Custom Properties
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'cssFileHeader'
          }
        }
      ]
    },
    // JavaScript/TypeScript
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
          options: {
            fileHeader: 'jsFileHeader'
          }
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations'
        }
      ]
    },
    // JSON para documentação
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat'
        }
      ]
    }
  }
};

// Transformações customizadas
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: function(token) {
    return token.attributes.category === 'size' && token.value && typeof token.value === 'number';
  },
  transformer: function(token) {
    return `${token.value}px`;
  }
});

// Formatação customizada para CSS
StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function(dictionary, file) {
    const header = StyleDictionary.formatHelpers.fileHeader(file);
    return header + ':root {\n' + 
      dictionary.allTokens.map(token => `  --${token.name}: ${token.value};`).join('\n') + 
      '\n}\n';
  }
});

// Headers customizados
StyleDictionary.registerFileHeader({
  name: 'cssFileHeader',
  fileHeader: function() {
    return [
      '/**',
      ' * Design Tokens',
      ' * Gerado automaticamente a partir do Figma',
      ' * Não edite este arquivo manualmente',
      ' */'
    ];
  }
});

StyleDictionary.registerFileHeader({
  name: 'jsFileHeader',
  fileHeader: function() {
    return [
      '/**',
      ' * Design Tokens',
      ' * Gerado automaticamente a partir do Figma',
      ' * Não edite este arquivo manualmente',
      ' */'
    ];
  }
});

module.exports = baseConfig;

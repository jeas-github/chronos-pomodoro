# Relatório de Auditoria Técnica: Ambiente Fullstack Windows (2025)

Este documento consolida as configurações validadas para o projeto **chronos-pomodoro**, garantindo compatibilidade total entre Windows, Git, VS Code e ferramentas de linting.

## 1. Base do Sistema de Arquivos e Git

### .gitattributes

Garante que o repositório sempre armazene arquivos em `LF`, independentemente da configuração global do usuário.

```gitattributes
* text=auto eol=lf
*.js text
*.ts text
*.json text
*.html text
*.css text
*.md text
.husky/* text eol=lf
*.sh text eol=lf
*.png binary
*.jpg binary
*.gif binary
*.ico binary
```

### .editorconfig

Sincroniza o comportamento do editor com o Git e as ferramentas de formatação.

```editorconfig
root = true

[*]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true

[*.sh]
end_of_line = lf

[{pre-commit,commit-msg}]
end_of_line = lf
```

## 2. Configurações do Editor (VS Code)

### .vscode/settings.json

Otimizado para remover redundâncias e respeitar as regras do projeto.

```json
{
   "files.eol": "auto",
   "files.trimTrailingWhitespace": true,
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true,
   "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "always"
   },
   "editor.renderWhitespace": "all"
}
```

## 3. Linting e Formatação

### .prettierrc

Define explicitamente o fim de linha para evitar conflitos no Windows.

```json
{
   "singleQuote": true,
   "semi": true,
   "quoteProps": "as-needed",
   "trailingComma": "all",
   "printWidth": 80,
   "tabWidth": 2,
   "useTabs": false,
   "arrowParens": "avoid",
   "bracketSpacing": true,
   "jsxSingleQuote": true,
   "bracketSameLine": false,
   "proseWrap": "preserve",
   "htmlWhitespaceSensitivity": "css",
   "endOfLine": "lf"
}
```

### eslint.config.js (Flat Config)

Integração perfeita com Prettier e regras de React atualizadas.

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
   { ignores: ["dist"] },
   {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
         version: 2020,
         globals: globals.browser,
      },
      plugins: {
         "react-hooks": reactHooks,
         "react-refresh": reactRefresh,
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
         ],
      },
   },
   eslintConfigPrettier
);
```

## 4. Automação e Hooks

### Husky v9 (Scripts Simplificados)

**.husky/pre-commit**: `npx lint-staged`
**.husky/commit-msg**: `npx commitlint --edit "$1"`

---

## Auditoria realizada por Manus (Engenheiro de Software Sênior)\*\*

# 🛡️ Documentação de Configuração: ESLint (Flat Config + Prettier)

Este projeto utiliza o sistema de configuração **Flat Config** do ESLint para
garantir a qualidade do código e a conformidade com as melhores práticas de
**React** e **TypeScript**. Ele atua em total harmonia com o **Prettier** para a
formatação visual.

## 🏗️ Estrutura do Arquivo `eslint.config.js`

O arquivo utiliza uma abordagem modular, importando plugins específicos para
cada tecnologia do ecossistema.

## 🔧 Detalhamento das Configurações

### 1. Ignorados Globais (`globalIgnores`)

- **`globalIgnores(['dist'])`**: Ignora a pasta de saída do build para otimizar
  a performance e evitar erros em arquivos gerados automaticamente.

### 2. Escopo de Aplicação (`files`)

- **`files: ['**/\*.{ts,tsx}']`\*\*: Aplica as regras estritamente a arquivos
  TypeScript e React, garantindo que o analisador correto seja usado para cada
  sintaxe.

### 3. Extensões e Plugins (`extends`)

O array de extensões segue uma ordem lógica de prioridade

- **`js.configs.recommended`**: Regras base para JavaScript.
- **`tseslint.configs.recommended`**: Regras específicas para a segurança de
  tipos do TypeScript.
- **`reactHooks.configs.flat.recommended`**: Validação de hooks do React.
- **`reactRefresh.configs.vite`**: Suporte ao Hot Module Replacement do Vite.
- **`eslint-config-prettier`**: Desativa todas as regras do ESLint que possam
  conflitar com as escolhas de estilo do Prettier.

### 4. Integração com Prettier

A inclusão do `eslint-config-prettier` garante que

- O ESLint foque apenas em **Qualidade do Código** (ex: variáveis não usadas).
- O Prettier foque apenas em **Estilo do Código** (ex: aspas e ponto e vírgula).

### 5. Opções de Linguagem (`languageOptions`)

- **`ecmaVersion: 2020`**: Define o padrão de sintaxe moderna.
- **`globals: globals.browser`**: Evita que o ESLint aponte erro ao usar objetos
  globais como `window`, `document` ou `navigator`.

---

## 🚀 Comandos Úteis

### Verificar qualidade do código

```bash
npx eslint .

```

### Verificar conflitos entre ESLint e Prettier

```bash
npx eslint-config-prettier ./src/App.tsx

```

### Instalar pacote de integração

```bash
npm install --save-dev eslint-config-prettier

```

---

### 💡 Dica de Expert

Ao usar esta configuração, se notar um sublinhado vermelho no editor, trate-o
como um problema real de lógica. Se o problema for apenas estético (espaços ou
aspas), o Prettier resolverá silenciosamente ao salvar o arquivo.

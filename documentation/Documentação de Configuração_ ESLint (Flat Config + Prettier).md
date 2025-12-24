# 🛡️ Documentação de Configuração: ESLint (Flat Config + Prettier)

Este documento detalha a configuração do **ESLint**, o motor de análise estática do projeto, configurado no formato moderno **Flat Config**. Sua função é garantir a qualidade do código, identificar erros de lógica e manter a consistência entre desenvolvedores.

---

## 🏗️ Estrutura do Arquivo `eslint.config.js`

O arquivo utiliza a função auxiliar `tseslint.config()`, que fornece suporte a tipos (IntelliSense) e organiza a configuração em um array de objetos, facilitando a composição de regras.

---

## 🔧 Detalhamento das Configurações

### 1. Ignorados Globais (`ignores`)
```javascript
{ ignores: ['dist'] }
```
- **O que faz:** Define diretórios que o ESLint deve ignorar completamente.
- **Por que:** A pasta `dist` contém o código compilado e minificado. Analisá-la causaria erros irrelevantes e consumiria processamento desnecessário.

### 2. Escopo de Aplicação (`files`)
```javascript
files: ['**/*.{ts,tsx}']
```
- **O que faz:** Restringe a aplicação destas regras específicas aos arquivos TypeScript e React TypeScript.
- **Por que:** Garante que o motor de análise do TypeScript não tente processar arquivos onde ele não é necessário (como arquivos de configuração JS puros).

### 3. Extensões e Plugins (`extends` & `plugins`)
O projeto combina o melhor de três mundos:
- **JS Recommended:** Regras base do JavaScript (ex: evitar variáveis não declaradas).
- **TS Recommended:** Regras específicas para TypeScript (ex: garantir tipagem correta).
- **React Hooks & Refresh:** 
    - `react-hooks`: Garante que as regras de ouro dos Hooks (ordem de chamada, dependências) sejam seguidas.
    - `react-refresh`: Permite que o Vite atualize apenas o componente modificado sem recarregar a página inteira.

### 4. Integração com Prettier
```javascript
eslintConfigPrettier
```
- **O que faz:** Desativa todas as regras do ESLint que podem conflitar com a formatação do Prettier.
- **Regra de Ouro:** Ele **DEVE** ser o último item do array. Isso garante que ele tenha a palavra final sobre o que é "estilo" e o que é "lógica".

### 5. Opções de Linguagem (`languageOptions`)
```javascript
languageOptions: {
  version: 2020,
  globals: globals.browser,
}
```
- **Version:** Define que o código utiliza funcionalidades modernas do ECMAScript 2020.
- **Globals:** Informa ao ESLint que variáveis como `window`, `document` e `localStorage` são globais válidas (ambiente de navegador), evitando avisos de "variável não definida".

---

## 🚀 Comandos Úteis

| Comando | Descrição |
| :--- | :--- |
| `npm run lint` | Executa a análise em todo o projeto e reporta erros no terminal. |
| `npm run lint:fix` | Tenta corrigir automaticamente todos os erros de estilo e regras simples. |

---

### 💡 Dica de Expert
No Windows, se você notar que o ESLint está demorando para reportar erros no VS Code, verifique se o seu terminal integrado está usando o **Git Bash**. O ESLint Flat Config performa melhor em ambientes que seguem padrões POSIX. Além disso, a regra `allowConstantExport: true` no `react-refresh` é o que permite que você exporte constantes (como tipos ou objetos de configuração) do mesmo arquivo de um componente sem quebrar o Fast Refresh.

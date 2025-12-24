# 📦 Documentação de Configuração: package.json (Manifesto do Projeto)

O arquivo `package.json` é o coração do projeto **chronos-pomodoro**. Ele atua como o manifesto central que define metadados, gerencia o ecossistema de dependências e orquestra os fluxos de automação de desenvolvimento e build.

---

## 🏗️ Metadados e Arquitetura

- **`name`**: `chronos-pomodoro` (Identificador único do projeto).
- **`type`**: `module` (Define que o projeto utiliza **ES Modules**, permitindo o uso de `import/export` nativo e garantindo compatibilidade com as ferramentas mais modernas de 2025).
- **`private`**: `true` (Uma trava de segurança que impede a publicação acidental do código em registros públicos como o npm).

---

## 🔧 Detalhamento dos Scripts de Automação

Os scripts são o motor da produtividade do desenvolvedor, padronizando comandos complexos.

### 1. Fluxo de Desenvolvimento e Build
- **`dev`**: `vite`
    - Inicia o servidor de desenvolvimento ultra-rápido do Vite 7. Utiliza HMR (Hot Module Replacement) para refletir mudanças no código instantaneamente.
- **`build`**: `tsc -b && vite build`
    - **Orquestração Crítica:** Primeiro executa o compilador TypeScript (`tsc`) para validar todos os tipos. Se houver erro de tipagem, o build do Vite nem sequer inicia, garantindo que apenas código válido chegue à produção.
- **`preview`**: `vite preview`
    - Permite testar localmente o bundle gerado pelo build, simulando o comportamento final de produção.

### 2. Fluxo de Qualidade e Auditoria
- **`lint`**: `eslint .`
    - Varre todo o projeto em busca de violações de regras de lógica e estilo.
- **`lint:fix`**: `eslint . --fix`
    - Tenta corrigir automaticamente o máximo de problemas detectados pelo ESLint.
- **`lint:check-prettier`**: `prettier --check "src/**/*.{ts,tsx,js,jsx}"`
    - Apenas verifica se os arquivos estão formatados, sem alterá-los. Útil para ambientes de CI/CD.
- **`lint:all`**: `npm run lint && npm run lint:check-prettier`
    - O comando de "Auditoria Total". Deve ser rodado antes de grandes merges para garantir integridade total.

### 3. Ciclo de Vida
- **`prepare`**: `husky`
    - Comando automático que configura os Git Hooks (Husky v9) imediatamente após o `npm install`.

---

## 🛡️ lint-staged (Filtro de Integridade Pré-Commit)

O `lint-staged` é a ferramenta que garante que nenhum código "sujo" entre no histórico do Git.

```json
"**/*.{ts,tsx,js,jsx}": [
  "eslint --fix",
  "prettier --write"
]
```
- **Escopo:** Atua apenas nos arquivos TypeScript e JavaScript que estão na área de "stage" do Git.
- **Ação:** Primeiro o ESLint corrige a lógica, depois o Prettier aplica a formatação final. Se qualquer etapa falhar (ex: erro de lógica que o ESLint não consegue fixar), o commit é abortado.

---

## 📚 Análise do Ecossistema de Dependências

### Dependências de Produção (`dependencies`)
- **React 19 & React DOM**: A base da interface, utilizando as últimas inovações em hooks e renderização concorrente.

### Dependências de Desenvolvimento (`devDependencies`)
- **Vite 7**: O bundler de última geração que substitui o antigo Webpack.
- **ESLint 9 & Prettier 3**: A dupla dinâmica de qualidade e estilo, configurada para trabalhar em harmonia.
- **Husky 9 & Commitlint 20**: Garantem que tanto o código quanto as mensagens de commit sigam padrões profissionais.
- **TypeScript 5**: Fornece a inteligência e segurança de tipos necessária para aplicações robustas.
- **typescript-eslint**: A ponte que permite ao ESLint entender e analisar código TypeScript profundamente.

---

### 💡 Dica de Expert
Este arquivo foi auditado para garantir que não existam dependências redundantes. Ao atualizar pacotes, use sempre `npm update` para respeitar os intervalos de versão definidos aqui. A presença do `eslint-config-prettier` nas `devDependencies` é o que permite que você use o Prettier sem que o ESLint aponte erros de formatação falsos.

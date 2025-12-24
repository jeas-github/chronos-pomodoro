# 💻 Documentação de Configuração: .vscode/settings.json

O arquivo `settings.json` dentro da pasta `.vscode` define as configurações específicas do projeto para o Visual Studio Code. Ele garante que todos os desenvolvedores tenham a mesma experiência de automação e visualização, independentemente de suas configurações globais.

---

## 🏗️ Estrutura e Escopo

Estas configurações são aplicadas apenas ao abrir a pasta do projeto, sobrescrevendo as configurações de "Usuário" do VS Code. Isso é fundamental para manter o projeto isolado e previsível.

---

## 🔧 Detalhamento das Configurações

### 1. Automação de Qualidade (Lint & Format)
O projeto utiliza um fluxo de "Auto-Correção" extremamente eficiente:

- **`editor.defaultFormatter`**: Define o Prettier como o formatador padrão para todos os arquivos suportados (TS, JS, HTML, CSS, JSON, etc.).
- **`editor.formatOnSave: true`**: Garante que o código seja formatado instantaneamente ao salvar, eliminando a necessidade de formatação manual.
- **`editor.codeActionsOnSave`**:
    - `source.fixAll.eslint: "always"`: Executa todas as correções automáticas do ESLint (como remoção de imports não usados ou correção de regras de hooks) no momento do salvamento.

### 2. Compatibilidade de Ambiente (Windows/Linux)
- **`files.eol: "auto"`**: 
    - **Crítico:** Configurado como `auto` para que o VS Code respeite o arquivo `.editorconfig`. Como definimos `end_of_line = lf` no EditorConfig, o VS Code converterá automaticamente qualquer arquivo para `LF` ao salvar, resolvendo o conflito histórico do Windows.
- **`files.trimTrailingWhitespace: true`**: Remove espaços inúteis ao final das linhas, mantendo o código limpo e os diffs do Git precisos.

### 3. Interface e Visualização
- **`editor.lineNumbers: "on"`**: Mantém a numeração de linhas visível para facilitar a comunicação e depuração.
- **`editor.renderWhitespace: "all"`**: Torna visíveis caracteres de espaço e tabulação. Isso ajuda a identificar indentações incorretas visualmente antes mesmo do linter atuar.
- **`breadcrumbs.enabled: false`**: Desativa a barra de navegação superior para ganhar espaço vertical e reduzir distrações visuais.

---

## 🚀 Por que o arquivo está tão limpo?

Durante a auditoria técnica, removemos as redundâncias por linguagem (ex: `[typescript]`, `[javascript]`). 
- **O motivo:** Como o Prettier é o formatador global e o ESLint atua em todos os arquivos de código, não há necessidade de repetir as ordens para cada extensão. Isso torna o arquivo mais fácil de ler e manter.

---

### 💡 Dica de Expert
Para que estas configurações funcionem perfeitamente, certifique-se de que as extensões **ESLint** e **Prettier - Code formatter** estejam instaladas no seu VS Code. Ao abrir o projeto pela primeira vez, o VS Code pode sugerir a instalação dessas extensões baseando-se neste arquivo e no `extensions.json` (se disponível).

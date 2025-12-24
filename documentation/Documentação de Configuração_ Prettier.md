# ✨ Documentação de Configuração: Prettier

O Prettier é um formatador de código opinativo que garante que todo o código fonte do projeto siga um estilo visual único e rigoroso. Ele remove discussões sobre estilo e foca na legibilidade e consistência.

---

## 🏗️ Estrutura do Arquivo `.prettierrc`

O arquivo utiliza o formato JSON para definir as regras de formatação que serão aplicadas automaticamente pelo editor ou por scripts de automação.

---

## 🔧 Detalhamento das Configurações

### 1. Estilo de Escrita
- **`singleQuote: true`**: 
    - Usa aspas simples (`'`) em vez de duplas (`"`). É o padrão mais comum na comunidade JavaScript moderna, resultando em um código visualmente mais limpo.
- **`semi: true`**: 
    - Adiciona ponto e vírgula ao final de cada instrução. Isso previne erros raros, mas difíceis de depurar, relacionados à inserção automática de ponto e vírgula (ASI) do JavaScript.
- **`trailingComma: all`**: 
    - Adiciona vírgulas ao final de todos os itens em objetos, arrays e parâmetros de funções. Isso torna os "diffs" do Git muito mais limpos, pois adicionar um novo item não marca a linha anterior como modificada.

### 2. Estrutura e Espaçamento
- **`printWidth: 80`**: 
    - Define que o código deve tentar se manter dentro de 80 caracteres por linha. Isso garante que o código seja legível mesmo em telas menores ou em visualizações lado a lado (side-by-side) no Git.
- **`tabWidth: 2` & `useTabs: false`**: 
    - Usa 2 espaços para indentação. Espaços garantem que o código tenha a mesma aparência em qualquer editor, ao contrário de Tabs, que podem variar de tamanho.
- **`bracketSpacing: true`**: 
    - Adiciona espaços entre chaves em objetos (ex: `{ key: value }`). Melhora a legibilidade visual imediata.

### 3. Específicos para React/JSX
- **`jsxSingleQuote: true`**: 
    - Aplica aspas simples também dentro de propriedades JSX, mantendo a consistência com o restante do código JavaScript.
- **`arrowParens: "avoid"`**: 
    - Remove parênteses em funções arrow com apenas um parâmetro (ex: `x => x * 2`). Torna o código mais conciso.

### 4. Compatibilidade e Ambiente
- **`endOfLine: "lf"`**: 
    - **Configuração Crítica:** Força o Prettier a sempre usar `LF` como fim de linha. Isso é essencial para que o Prettier não entre em conflito com o Git e o EditorConfig no Windows, garantindo que o código formatado seja sempre aceito pelo repositório.

---

## 🚀 Comandos Úteis

| Comando | Descrição |
| :--- | :--- |
| `npx prettier --check .` | Verifica se todos os arquivos estão formatados corretamente. |
| `npx prettier --write .` | Formata todos os arquivos do projeto de acordo com estas regras. |

---

### 💡 Dica de Expert
O Prettier é configurado para rodar no **`lint-staged`** antes de cada commit. Isso significa que você não precisa se preocupar em formatar o código manualmente; basta salvar o arquivo (se o VS Code estiver configurado) ou simplesmente realizar o commit, e o Prettier cuidará do resto para você.

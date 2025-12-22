# 🎨 Documentação de Estilo: Prettier

Este projeto utiliza o **Prettier** como formatador de código opinativo para
garantir a consistência visual em todo o ecossistema de arquivos. Abaixo estão
detalhadas as regras configuradas no arquivo `.prettierrc.json`.

> **⚠️ Importante**: O arquivo `.prettierignore` é essencial para evitar que o
> Prettier processe pastas pesadas (como `node_modules`), arquivos gerados
> automaticamente ou dados sensíveis.

---

## 🔧 Detalhamento por Categorias

### 1. Estilo de Escrita (Linguagem)

- **`singleQuote: true`**: Força o uso de aspas simples (`'text'`). Isso mantém
  o código visualmente mais limpo e evita o uso constante da tecla "Shift".
- **`semi: true`**: Garante que todas as instruções terminem com ponto e vírgula
  (`;`), prevenindo erros de interpretação do motor do JavaScript.
- **`quoteProps: "as-needed"`**: Só coloca aspas em chaves de objetos se for
  obrigatório (ex: `{'prop-com-hifen': 1}`).
- **`trailingComma: "all"`**: Adiciona vírgula após o último item de arrays e
  objetos, tornando os _diffs_ no Git muito mais limpos.

### 2. Estrutura e Layout do Arquivo

- **`printWidth: 80`**: Define o limite visual de 80 caracteres. Acima disso, o
  Prettier quebra a linha automaticamente.
- **`tabWidth: 2`**: Define que cada nível de indentação terá exatamente 2
  espaços.
- **`useTabs: false`**: Garante que o recuo seja feito com espaços, mantendo a
  aparência consistente em qualquer editor.

### 3. Lógica de Sintaxe (JS/JSX)

- **`arrowParens: "avoid"`**: Simplifica funções arrow com apenas um argumento,
  removendo os parênteses (ex: `user => user.id`).
- **`bracketSpacing: true`**: Adiciona um espaço de respiro dentro de objetos
  (ex: `{ nome: 'Ana' }`).
- **`jsxSingleQuote: true`**: Estende a regra de aspas simples para dentro dos
  atributos do React/JSX.
- **`bracketSameLine: false`**: Garante que o fechamento `>` de uma tag
  multilinhas fique sozinho na linha de baixo.

### 4. Textos e Sensibilidade (Markdown/HTML)

- **`proseWrap: "always"`**: Em arquivos Markdown, o texto é quebrado para
  respeitar o limite de 80 caracteres.
- **`htmlWhitespaceSensitivity: "css"`**: Gerencia quebras de linha em HTML
  baseando-se no comportamento CSS para evitar espaços indesejados no layout.

### 5. Controle de Processamento (Pragma)

- **`requirePragma: false`** / **`insertPragma: false`**: O formatador atua em
  todos os arquivos sem exigir comentários especiais (como `/** @format */`) no
  topo do código.

---

## 🚀 Comandos Úteis

### Formatar todos os arquivos do projeto

```bash
npx prettier --write .

```

### Apenas verificar a formatação

```bash
npx prettier --check .

```

**⚠️ Importante**: A palavra **`Pragma`** em computação refere-se a uma
instrução que indica ao compilador ou processador como ele deve tratar o código.
No contexto do Prettier, o pragma é um comentário especial colocado no topo do
arquivo. O pragma do Prettier é um comentário de topo, geralmente escrito como
`/** @format */` ou `// @format`.

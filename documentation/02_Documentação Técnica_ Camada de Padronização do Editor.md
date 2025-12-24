# Documentação Técnica: Camada de Padronização do Editor

Esta camada garante que a interface de desenvolvimento (IDE) esteja alinhada com as regras do projeto, automatizando tarefas repetitivas e prevenindo erros de formatação.

## 1. .editorconfig
O `.editorconfig` define as regras básicas de escrita que devem ser respeitadas por qualquer editor de código (VS Code, IntelliJ, Vim, etc.).

### Propósito Técnico
- **Consistência Universal:** Garante que o recuo (indentação), o conjunto de caracteres e o fim de linha sejam idênticos para todos os colaboradores.
- **Prevenção de Conflitos:** Ao definir `end_of_line = lf`, ele evita que o VS Code no Windows use o padrão `CRLF`, mantendo a harmonia com o Git e o Prettier.

### Configurações Principais
| Propriedade | Valor | Justificativa |
| :--- | :--- | :--- |
| `indent_style` | `space` | Padrão moderno para evitar variações de visualização entre editores. |
| `indent_size` | `2` | Melhora a legibilidade em estruturas profundas de componentes React. |
| `end_of_line` | `lf` | Essencial para compatibilidade com ferramentas de linting e CI/CD. |
| `insert_final_newline` | `true` | Segue o padrão POSIX, garantindo que arquivos terminem com uma linha vazia. |

---

## 2. .vscode/settings.json
Configurações específicas para o Visual Studio Code que potencializam a produtividade no projeto.

### Automação de Desenvolvimento
O projeto está configurado para ser "Auto-Healing" (Auto-Correção):
- **Format on Save:** Ao salvar qualquer arquivo, o plugin do Prettier é acionado automaticamente.
- **ESLint Fix on Save:** Erros de lógica ou estilo que o ESLint consegue resolver (como importações não utilizadas ou ordem de hooks) são corrigidos instantaneamente no salvamento.

### Decisões de Design de Configuração
- **files.eol = "auto"**: Configurado como `auto` para que o VS Code respeite a regra definida no `.editorconfig`. Isso remove a necessidade de forçar manualmente o formato no editor.
- **Remoção de Redundâncias**: O formatador padrão foi definido globalmente (`editor.defaultFormatter`). Isso simplifica a manutenção, eliminando a necessidade de blocos específicos para `[javascript]` ou `[typescript]`.

### Extensões Recomendadas
Para que estas configurações funcionem, o desenvolvedor deve ter instalado:
1.  `esbenp.prettier-vscode` (Prettier)
2.  `dbaeumer.vscode-eslint` (ESLint)
3.  `editorconfig.editorconfig` (EditorConfig)

# Documentação Técnica: Camada de Qualidade e Estilo

Esta camada define as regras de governança do código fonte, garantindo que a base de código seja uniforme, legível e livre de padrões problemáticos.

## 1. .prettierrc
O Prettier é o "zelador" do estilo do código. Ele foca na estética e na formatação automática.

### Decisões de Estilo
| Propriedade | Valor | Justificativa |
| :--- | :--- | :--- |
| `singleQuote` | `true` | Melhora a legibilidade e é o padrão predominante na comunidade JavaScript/TypeScript. |
| `semi` | `true` | Evita problemas ambíguos de interpretação do ASI (Automatic Semicolon Insertion). |
| `trailingComma` | `all` | Reduz o ruído em diffs do Git ao adicionar novos itens em objetos ou arrays. |
| `endOfLine` | `lf` | **Crítico:** Garante que o Prettier sempre salve em LF, prevenindo conflitos no Windows. |

---

## 2. eslint.config.js (Flat Config)
O ESLint é o "auditor" da lógica do código. Ele identifica padrões perigosos, variáveis não utilizadas e violações de regras de frameworks.

### Arquitetura da Configuração
O projeto utiliza o novo **Flat Config** (v9+), que oferece uma estrutura mais clara e performática:

1.  **Integração com Prettier:** Através do `eslint-config-prettier`, todas as regras de estilo do ESLint que poderiam conflitar com o Prettier são desativadas. O Prettier cuida do visual, o ESLint cuida da lógica.
2.  **TypeScript Especializado:** Utiliza o `typescript-eslint` para fornecer uma análise estática profunda, capturando erros de tipo antes mesmo da compilação.
3.  **Ecossistema React:**
    *   **React Hooks:** Valida se as regras de hooks (como a ordem de chamada) estão sendo seguidas.
    *   **React Refresh:** Garante que os componentes sejam exportados de forma compatível com o Fast Refresh do Vite, acelerando o desenvolvimento.

### Fluxo de Execução
O ESLint está configurado para ignorar a pasta `dist/` e focar exclusivamente nos arquivos fonte (`.ts`, `.tsx`). Ele é executado automaticamente no salvamento (via VS Code) e antes de cada commit (via Husky).

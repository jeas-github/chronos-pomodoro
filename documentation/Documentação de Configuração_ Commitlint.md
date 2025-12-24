# 📝 Documentação de Configuração: Commitlint

O Commitlint é uma ferramenta que valida as mensagens de commit do Git, garantindo que elas sigam um padrão estruturado e semântico. Isso facilita a leitura do histórico do projeto e permite a automação de changelogs e versionamento.

---

## 🏗️ Estrutura do Arquivo `commitlint.config.js`

O arquivo utiliza o formato ESM (`export default`) para exportar as regras de validação, sendo compatível com o padrão `"type": "module"` do projeto.

---

## 🔧 Detalhamento das Configurações

### 1. Extensão de Regras (`extends`)
```javascript
extends: ['@commitlint/config-conventional']
```
- **O que faz:** Adota o padrão **Conventional Commits**, que é a norma mais utilizada na indústria de software (utilizada por projetos como Angular e Node.js).
- **Por que:** Garante que as mensagens de commit sejam previsíveis e informativas, seguindo a estrutura: `<tipo>[escopo opcional]: <descrição>`.

### 2. Tipos de Commit Suportados
Ao utilizar o padrão convencional, o projeto aceita os seguintes tipos principais:

| Tipo | Descrição | Exemplo |
| :--- | :--- | :--- |
| `feat` | Uma nova funcionalidade para o usuário. | `feat: add pomodoro timer` |
| `fix` | Correção de um bug. | `fix: resolve timer reset issue` |
| `docs` | Alterações apenas na documentação. | `docs: update readme instructions` |
| `style` | Mudanças que não afetam o significado do código (espaços, formatação). | `style: run prettier on src` |
| `refactor` | Mudança no código que não corrige bug nem adiciona funcionalidade. | `refactor: simplify timer logic` |
| `perf` | Mudança de código que melhora a performance. | `perf: optimize re-renders` |
| `chore` | Mudanças em ferramentas, build ou dependências. | `chore: update husky to v9` |

---

## 🚀 Comandos Úteis

O Commitlint é executado automaticamente pelo Husky no hook `commit-msg`. Se a mensagem não seguir o padrão, o commit será rejeitado.

| Comando | Descrição |
| :--- | :--- |
| `echo "msg" | npx commitlint` | Testa manualmente se uma mensagem é válida. |

---

### 💡 Dica de Expert
Mensagens de commit bem estruturadas são o segredo para um projeto escalável. Ao usar o `commitlint`, você está preparando o terreno para usar ferramentas como o **Semantic Release**, que pode ler seu histórico de commits e decidir automaticamente se deve gerar uma nova versão `1.0.1` (fix) ou `1.1.0` (feat) do seu projeto.

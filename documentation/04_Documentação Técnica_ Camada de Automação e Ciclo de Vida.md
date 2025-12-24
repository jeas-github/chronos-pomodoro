# Documentação Técnica: Camada de Automação e Ciclo de Vida

Esta camada define os processos automatizados que regem o desenvolvimento, a construção (build) e a garantia de qualidade antes de cada commit.

## 1. package.json (Scripts e Fluxos)
O `package.json` não é apenas um gerenciador de dependências, mas o orquestrador de todo o ciclo de vida do projeto.

### Scripts Principais
| Script | Comando | Propósito |
| :--- | :--- | :--- |
| `dev` | `vite` | Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR). |
| `build` | `tsc -b && vite build` | Valida os tipos do TypeScript e gera a versão otimizada para produção. |
| `lint:all` | `npm run lint && ...` | Executa uma auditoria completa de linting e formatação em todo o projeto. |
| `prepare` | `husky` | Comando de ciclo de vida que ativa os Git Hooks automaticamente após a instalação. |

### lint-staged
Configurado para garantir que apenas arquivos modificados sejam validados, otimizando a performance do commit. Ele executa o `eslint --fix` seguido do `prettier --write`, garantindo que o código entre no repositório impecável.

---

## 2. Husky & Commitlint (Git Hooks)
O Husky v9 atua como a "guarda de fronteira" do repositório, impedindo que commits inválidos sejam criados.

### pre-commit
Executa o `lint-staged`. Se houver qualquer erro de linting que não possa ser corrigido automaticamente, o commit é abortado. Isso garante que a branch principal nunca receba código quebrado ou mal formatado.

### commit-msg (Commitlint)
Valida se a mensagem de commit segue o padrão **Conventional Commits** (ex: `feat: add timer component`).
- **Benefício:** Facilita a geração automática de changelogs e torna o histórico do projeto legível para humanos e máquinas.
- **Configuração:** Utiliza o `@commitlint/config-conventional`, garantindo que o projeto siga os padrões da indústria.

### Compatibilidade Windows
Os hooks foram simplificados para chamadas diretas via `npx`, eliminando scripts shell complexos que costumam falhar no Windows/Git Bash.

# 📖 Documentação de Scripts: `package.json`

Este projeto utiliza o **NPM** para gerenciar o ciclo de vida da aplicação,
integrando ferramentas de build, qualidade de código e automação de commits.

---

## 🛠️ Comandos de Desenvolvimento

Estes scripts são usados durante a criação e visualização do projeto.

| Comando           | Execução Técnica       | Utilidade                                                               |
| :---------------- | :--------------------- | :---------------------------------------------------------------------- |
| `npm run dev`     | `vite`                 | Inicia o servidor local com _Hot Module Replacement_ (HMR).             |
| `npm run build`   | `tsc -b && vite build` | Realiza a checagem de tipos (TypeScript) e gera o bundle para produção. |
| `npm run preview` | `vite preview`         | Sobe um servidor local para testar o build final antes do deploy.       |

---

## 🛡️ Ferramentas de Linting e Formatação

Scripts responsáveis por manter a base de código limpa e livre de erros comuns.

- **`npm run lint`**: Varre o projeto em busca de problemas de lógica ou
  segurança usando o **ESLint**.
- **`npm run lint:fix`**: Executa o ESLint e corrige automaticamente problemas
  simples, como variáveis não utilizadas.
- **`npm run lint:check-prettier`**: Verifica se existe algum conflito entre as
  regras do ESLint e do Prettier.
- **`npm run lint:all`**: Executa a análise completa (`lint`) seguida da
  verificação de conflitos (`check-prettier`).

---

## ⚓ Automação de Ciclo de Vida (Hooks)

O projeto utiliza o **Husky** e o **lint-staged** para garantir a integridade do
código antes do envio ao repositório.

### Hooks Automatizados

- **`npm run prepare`**: Inicializa o Husky no projeto. É executado
  automaticamente após cada `npm install`.

### Configuração `lint-staged`

Invocado automaticamente pelo Husky antes de cada `git commit`. Ele filtra
arquivos modificados (`.ts`, `.tsx`, `.js`, `.jsx`) e aplica:

1. **`eslint --fix`**: Corrige erros de lógica.
2. **`prettier --write`**: Aplica a formatação visual conforme definido no
   projeto.

---

## 📝 Padronização de Mensagens (Commitlint)

As mensagens de commit devem seguir o padrão **Conventional Commits**.

- **Regra**: Toda mensagem deve ter um tipo (ex: `feat:`, `fix:`, `chore:`).
- **Exemplo Correto**: `feat: add timer logic`
- **Exemplo Incorreto**: `ajustes no código` (será rejeitado pelo Husky).

> **Dica de Expert:** Para garantir que todos os hooks funcionem após clonar o
> projeto, rode sempre `npm install`. O script `prepare` configurará o Husky
> automaticamente.

# Chronos Pomodoro

Aplicação de gerenciamento de tempo utilizando a técnica Pomodoro, focada em
produtividade e qualidade de código.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

### Core (Núcleo)

- **React 19**: Biblioteca principal para construção da interface de usuário.
- **Vite 7**: Ferramenta de build de próxima geração, oferecendo um ambiente de
  desenvolvimento ultra-rápido.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, garantindo maior
  segurança no desenvolvimento.

### Qualidade de Código e Estilo

- **ESLint 9**: Ferramenta de análise estática para identificar e corrigir
  problemas de código.
- **Prettier 3**: Formatador de código que garante um estilo visual consistente.
- **typescript-eslint**: Regras específicas do ESLint para TypeScript.

### Automação e Padronização

- **Husky 8**: Gerenciador de Git Hooks para automatizar verificações.
- **lint-staged 16**: Executa linting e formatação apenas nos arquivos
  modificados no stage.
- **Commitlint 20**: Valida se as mensagens de commit seguem o padrão
  _Conventional Commits_.
- **eslint-config-prettier**: Garante a compatibilidade entre ESLint e Prettier.

---

## 🚀 Instalação e Execução

Siga as instruções abaixo para configurar o ambiente de desenvolvimento
localmente.

### 1. Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (Versão 18 ou superior recomendada)
- **NPM** (Gerenciador de pacotes)

### 2. Clonar o Repositório

```bash
git clone [https://github.com/seu-usuario/chronos-pomodoro.git](https://github.com/seu-usuario/chronos-pomodoro.git)
cd chronos-pomodoro

```

### 3. Instalar Dependências

Este passo ativa automaticamente o **Husky** através do script `prepare`:

```bash
npm install

```

### 4. Executar o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev

```

---

## 🤝 Guia de Contribuição

Para manter a qualidade do código, siga os padrões definidos abaixo:

### Desenvolvimento e Qualidade

Antes de enviar suas alterações, você pode validar o código manualmente:

- **Verificar erros:** `npm run lint`
- **Corrigir automaticamente:** `npm run lint:fix`
- **Validar conflitos Prettier:** `npm run lint:all`

### Padrão de Commits

Este projeto utiliza **Conventional Commits**. O commit será rejeitado se não
seguir a estrutura `<tipo>: <descrição>`.

**Tipos comuns:**

- `feat`: Nova funcionalidade.
- `fix`: Correção de bug.
- `docs`: Alteração em documentação.
- `style`: Formatação e estilo.
- `chore`: Atualização de tarefas ou dependências.

---

## 📄 Comandos Úteis

- **Gerar Build:** `npm run build`
- **Testar Build:** `npm run preview`

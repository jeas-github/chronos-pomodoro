# 🛠️ Documentação de Configuração: tsconfig.node.json

O arquivo `tsconfig.node.json` define as regras de compilação para os arquivos que rodam no ambiente **Node.js**, como scripts de automação e o arquivo de configuração do Vite. Ele isola as tipagens do servidor das tipagens do navegador.

---

## 🏗️ Estrutura e Escopo

- **`include: ["vite.config.ts"]`**: Restringe a atuação deste arquivo apenas ao arquivo de configuração do Vite. Isso garante que as tipagens do Node.js não "vazem" para o código da aplicação React.
- **`composite: true`**: Permite que este arquivo seja parte da estrutura de referências do `tsconfig.json` raiz, facilitando a manutenção e a performance do compilador.

---

## 🔧 Detalhamento das Opções de Compilação

### 1. Ambiente de Execução (`target` & `types`)
- **`target: ES2022`**: Alinha o código com as versões modernas do Node.js (LTS), permitindo o uso de funcionalidades como módulos nativos e sintaxes avançadas.
- **`types: ["node"]`**: **Configuração Crítica.** Informa ao TypeScript que este contexto tem acesso às APIs globais do Node.js (como `process`, `__dirname`, `fs`, `path`). Sem isso, o `vite.config.ts` apresentaria erros ao tentar usar essas ferramentas.

### 2. Modo de Módulos e Resolução
- **`moduleResolution: bundler`**: Assim como na aplicação, utiliza o modo de resolução moderno que entende como o Vite e o Node.js lidam com pacotes e exportações.
- **`verbatimModuleSyntax: true`**: Garante que o TypeScript não altere a forma como os `imports` e `exports` são escritos, mantendo a fidelidade ao padrão ESM (ECMAScript Modules).

### 3. Rigor e Qualidade (Linting)
- **`strict: true`**: Mantém o mesmo nível de exigência da aplicação principal, garantindo que as configurações do projeto também sejam escritas com segurança de tipos.
- **`noEmit: true`**: O TypeScript apenas valida os tipos. A execução real do `vite.config.ts` é feita pelo próprio Vite usando transformadores internos rápidos.

---

## 🚀 Por que separar o tsconfig.node?

A separação é uma **boa prática de arquitetura**:
1.  **Evita Conflitos:** No navegador, você não tem `process.env`. No Node, você tem. Se houvesse apenas um `tsconfig.json`, o TypeScript poderia sugerir APIs do Node dentro do seu componente React, o que causaria erros em tempo de execução.
2.  **Performance:** O editor de código (VS Code) carrega apenas as tipagens necessárias para o arquivo que você está editando no momento.

---

### 💡 Dica de Expert
Se você precisar adicionar novos arquivos de configuração na raiz do projeto (como um `vitest.config.ts` para testes), lembre-se de adicioná-los ao array `include` deste arquivo. Isso garantirá que eles também recebam a inteligência e a proteção de tipos do ambiente Node.js.

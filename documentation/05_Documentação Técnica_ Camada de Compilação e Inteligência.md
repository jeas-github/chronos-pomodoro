# Documentação Técnica: Camada de Compilação e Inteligência

Esta camada rege como o TypeScript interpreta o código, garantindo segurança de tipos, performance de compilação e compatibilidade entre diferentes ambientes de execução.

## 1. tsconfig.json (Solution Mode)
O projeto utiliza o padrão moderno de "Solution Mode", onde o arquivo raiz atua como um orquestrador para diferentes contextos.

### Propriedades Globais
- **forceConsistentCasingInFileNames: true**: Configuração crítica para desenvolvedores Windows. Ela impede que o código compile se houver inconsistência entre maiúsculas e minúsculas nos nomes de arquivos, evitando quebras em ambientes Linux (CI/CD).
- **strict: true**: Ativa o nível máximo de segurança do TypeScript, exigindo tipagem explícita e prevenindo erros comuns de `null` ou `undefined`.

---

## 2. Arquitetura de Referências
O TypeScript separa o projeto em dois contextos distintos para evitar poluição de tipos:

### tsconfig.app.json (Contexto do Cliente)
- **Foco:** Código fonte da aplicação React que roda no navegador.
- **Configurações:** Inclui bibliotecas de DOM e define o Vite como o ambiente de execução.
- **Segurança:** Garante que você não use acidentalmente APIs exclusivas do Node.js (como `fs` ou `path`) dentro do seu código React.

### tsconfig.node.json (Contexto de Ferramental)
- **Foco:** Arquivos de configuração que rodam no ambiente Node.js (ex: `vite.config.ts`).
- **Configurações:** Focado em módulos CommonJS/ESM para ferramentas de build.
- **Segurança:** Garante que as ferramentas de build tenham acesso às tipagens do sistema operacional sem interferir na aplicação final.

---

## 3. Performance e DX
- **Incremental Compilation:** O TypeScript está configurado para realizar builds incrementais, salvando o estado da última compilação para acelerar as verificações subsequentes.
- **SkipLibCheck:** Ignora a verificação de tipos dentro da pasta `node_modules`, reduzindo drasticamente o tempo de inicialização do servidor de desenvolvimento e do build final.

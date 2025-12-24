# 🛡️ Documentação de Configuração: .gitignore

O arquivo `.gitignore` define quais arquivos e diretórios o Git deve ignorar propositalmente. Ele é essencial para manter o repositório limpo, seguro e focado exclusivamente no código fonte necessário para a aplicação.

---

## 🏗️ Estrutura de Exclusão

O arquivo está organizado por categorias para facilitar a manutenção e a compreensão do que está sendo protegido.

---

## 🔧 Detalhamento das Categorias

### 1. Dependências e Artefatos de Build
```ignore
node_modules
dist
build
```
- **node_modules**: Nunca deve ser versionado, pois contém milhares de arquivos que podem ser baixados via `npm install`. Versioná-lo tornaria o repositório extremamente pesado e lento.
- **dist / build**: São os resultados da compilação. Como podem ser gerados a qualquer momento via `npm run build`, não há necessidade de guardá-los no histórico do Git.

### 2. Logs e Arquivos Temporários
```ignore
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
- **Logs**: Arquivos gerados durante a execução ou erro de comandos. São temporários e específicos da máquina do desenvolvedor, não agregando valor ao projeto compartilhado.

### 3. Segurança e Variáveis de Ambiente
```ignore
.env
.env.local
.env.*.local
```
- **Crítico:** Arquivos `.env` contêm segredos, chaves de API e senhas de banco de dados. **Nunca** devem ser enviados para o Git para evitar vazamento de informações sensíveis. O projeto deve fornecer um arquivo `.env.example` como modelo.

### 4. Configurações de IDE e Sistema
```ignore
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
```
- **IDEs**: Ignora configurações pessoais do VS Code ou WebStorm. A exceção `!.vscode/extensions.json` permite compartilhar a lista de extensões recomendadas para o time.
- **.DS_Store**: Arquivo invisível do macOS que não tem utilidade no projeto.

### 5. TypeScript e Cache
```ignore
*.tsbuildinfo
```
- Arquivos gerados pelo TypeScript para acelerar compilações incrementais. São específicos de cada máquina e não devem ser versionados.

---

## 🚀 Boas Práticas

| Situação | Ação |
| :--- | :--- |
| Arquivo já rastreado | Se você adicionou algo ao `.gitignore` que já estava no Git, use `git rm --cached <arquivo>` para removê-lo do rastreio sem apagá-lo do disco. |
| Novo segredo | Sempre que criar um novo arquivo de configuração local, verifique se ele está coberto pelas regras deste arquivo. |

---

### 💡 Dica de Expert
No Windows, alguns arquivos temporários podem ter nomes com variações de maiúsculas. O `.gitignore` é sensível a isso dependendo da configuração do Git. Ao manter padrões genéricos como `*.log`, você garante que o Git capture todas as variações, mantendo seu repositório sempre limpo e profissional.

# 🚫 Documentação de Configuração: .prettierignore

O arquivo `.prettierignore` define quais arquivos e diretórios o Prettier deve ignorar completamente. Ele funciona de forma análoga ao `.gitignore`, garantindo que o formatador não tente processar arquivos que não devem ser alterados ou que são gerados automaticamente.

---

## 🏗️ Estrutura do Arquivo `.prettierignore`

O arquivo utiliza padrões de glob para identificar caminhos que devem ser excluídos do processo de formatação, seja via plugin do editor ou via linha de comando.

---

## 🔧 Detalhamento das Configurações

### 1. Dependências e Saídas de Build
```ignore
node_modules
dist
build
```
- **O que faz:** Ignora as pastas de bibliotecas externas e os resultados da compilação.
- **Por que:** 
    - `node_modules`: Contém milhares de arquivos que já vêm formatados ou minificados. Tentar formatá-los causaria um travamento no editor e no Git.
    - `dist/build`: São arquivos gerados por máquinas para máquinas. Formatar esses arquivos é inútil e pode corromper o bundle final.

### 2. Arquivos de Lock (Lockfiles)
```ignore
package-lock.json
yarn.lock
pnpm-lock.yaml
```
- **O que faz:** Impede que o Prettier altere a estrutura dos arquivos de trava de dependências.
- **Por que:** Estes arquivos são gerados automaticamente pelos gerenciadores de pacotes. Qualquer alteração manual ou de formatação pode corromper a integridade das versões instaladas, causando erros de instalação para outros desenvolvedores.

### 3. Segurança e Ambiente
```ignore
.env
.env.*
```
- **O que faz:** Protege arquivos de variáveis de ambiente.
- **Por que:** Arquivos `.env` costumam conter chaves de API e segredos. Embora a formatação não mude o valor, ignorá-los garante que o Prettier nunca toque em dados sensíveis, mantendo o foco apenas no código fonte.

### 4. Configurações de IDE e Logs
```ignore
.vscode
.idea
*.log
```
- **O que faz:** Ignora configurações específicas de editores e arquivos de log temporários.
- **Por que:** Configurações de IDE são arquivos XML ou JSON específicos que não precisam seguir o guia de estilo do código fonte do projeto.

---

## 🚀 Comandos Úteis

O Prettier respeita este arquivo automaticamente ao ser executado via CLI:

| Comando | Comportamento |
| :--- | :--- |
| `npx prettier --write .` | Formata o projeto inteiro, **exceto** o que está listado no `.prettierignore`. |

---

### 💡 Dica de Expert
Mantenha o seu `.prettierignore` em sincronia com o seu `.gitignore`. Uma boa regra de ouro é: **se o arquivo não deve ir para o repositório, ele provavelmente também não precisa ser formatado pelo Prettier.** Isso economiza ciclos de CPU e mantém o seu ambiente de desenvolvimento mais ágil.

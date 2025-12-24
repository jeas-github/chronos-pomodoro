# 🔍 Documentação de Auditoria: Configuração do Git (Windows)

Este documento detalha a auditoria das configurações do Git nos níveis de **Sistema**, **Global** (Usuário) e **Local** (Repositório). Ele explica como essas camadas interagem para garantir a estabilidade do projeto **chronos-pomodoro**.

---

## 🏗️ Hierarquia de Configuração

O Git aplica as configurações em cascata, onde o nível mais específico (Local) sempre sobrescreve o nível mais geral (System).

### 1. Nível de Sistema (`system`)
*Localização: C:/Program Files/Git/etc/gitconfig*
- **`core.autocrlf=true`**: Define o comportamento padrão do Windows para converter `LF` em `CRLF`.
- **`pull.rebase=false`**: O padrão do sistema é usar `merge` ao puxar alterações.
- **`init.defaultbranch=master`**: O nome padrão legado para novas branches.

### 2. Nível Global / Usuário (`global`)
*Localização: C:/Users/jeas/.gitconfig*
- **`user.name` & `user.email`**: Identificam o autor dos commits (Jorge Eduardo).
- **`core.autocrlf=true`**: Reforça a conversão de fins de linha no nível do usuário.
- **`core.safecrlf=warn`**: O Git emitirá avisos se houver conversões irreversíveis, o que é uma boa prática de segurança.
- **`pull.rebase=true`**: **Decisão Sênior.** O usuário Jorge Eduardo prefere manter um histórico limpo usando `rebase` por padrão, sobrescrevendo o `merge` do sistema.
- **`init.defaultbranch=main`**: Atualiza o padrão para o nome moderno de branches.

### 3. Nível Local / Repositório (`local`)
*Localização: .git/config*
- **`core.hookspath=.husky`**: **Configuração Crítica.** Redireciona os hooks do Git para a pasta do Husky, ativando as automações de `pre-commit` e `commit-msg`.
- **`core.ignorecase=true`**: Comportamento padrão do Windows para ignorar diferenças entre maiúsculas e minúsculas em nomes de arquivos (neutralizado pela flag `forceConsistentCasingInFileNames` no TypeScript).
- **`remote.origin.url`**: Define o destino do código no GitHub via SSH.

---

## 🔧 Análise de Compatibilidade e Riscos

### O "Cabo de Guerra" dos Line Endings
- **O Risco:** Tanto o Sistema quanto o Global forçam `CRLF`. Se o projeto não tivesse o `.gitattributes`, o Git converteria todos os arquivos para o formato Windows, quebrando o Prettier e o ESLint.
- **A Solução:** O projeto utiliza o `.gitattributes` local para "vencer" esta configuração global, garantindo que o repositório permaneça em `LF`.

### Estratégia de Rebase
- **Observação:** Como o Jorge Eduardo usa `pull.rebase=true` globalmente, ele deve estar ciente de que, ao trabalhar em equipe, o histórico de commits será linear. Esta é uma excelente prática para desenvolvedores experientes, mas exige cuidado ao lidar com conflitos complexos.

---

## 🚀 Comandos de Diagnóstico

| Comando | Propósito |
| :--- | :--- |
| `git config --list --show-origin` | Mostra de onde vem cada configuração (como o Jorge Eduardo fez). |
| `git config --local -l` | Mostra apenas as regras que se aplicam a este projeto específico. |

---

### 💡 Dica de Expert
Sua configuração está muito bem organizada. O fato de você ter o `core.hookspath` apontando para `.husky` localmente é o que garante que as travas de segurança que documentamos funcionem. Se um dia os hooks pararem de rodar, este é o primeiro lugar que você deve verificar para garantir que o caminho não foi alterado.

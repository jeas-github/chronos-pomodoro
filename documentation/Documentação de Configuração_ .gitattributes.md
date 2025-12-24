# 📜 Documentação de Configuração: .gitattributes

O arquivo `.gitattributes` define atributos específicos para caminhos de arquivos no Git. Ele é a ferramenta definitiva para garantir que o código fonte seja tratado de forma consistente, independentemente do sistema operacional ou da configuração global do Git do desenvolvedor.

---

## 🏗️ Estrutura do Arquivo `.gitattributes`

O arquivo funciona mapeando padrões de nomes de arquivos para atributos específicos que controlam como o Git realiza o checkout, o commit e a detecção de diferenças (diff).

---

## 🔧 Detalhamento das Configurações

### 1. Normalização Global (`* text=auto eol=lf`)
```gitattributes
* text=auto eol=lf
```
- **O que faz:** 
    - `text=auto`: O Git tenta detectar automaticamente se um arquivo é texto.
    - `eol=lf`: **Configuração Crítica.** Força o Git a sempre armazenar arquivos de texto com `LF` (Line Feed) no repositório.
- **Por que:** No Windows, onde o padrão global costuma ser `core.autocrlf=true`, esta regra garante que o projeto "mande" na configuração. Isso evita que o Git converta arquivos para `CRLF` de forma inconsistente, o que quebraria o Prettier e o ESLint.

### 2. Especificação de Arquivos de Texto
```gitattributes
*.js text
*.ts text
*.json text
...
```
- **O que faz:** Garante explicitamente que estas extensões sejam tratadas como texto.
- **Por que:** Evita que o Git trate arquivos de configuração ou código como binários, permitindo que ele gere "diffs" legíveis e realize merges automáticos de forma segura.

### 3. Proteção de Arquivos Binários
```gitattributes
*.png binary
*.jpg binary
...
```
- **O que faz:** Marca explicitamente arquivos de mídia como binários.
- **Por que:** Impede que o Git tente "normalizar" o fim de linha dentro de uma imagem ou ícone, o que corromperia o arquivo permanentemente.

### 4. Segurança de Hooks e Scripts (`.husky/*` e `*.sh`)
```gitattributes
.husky/* text eol=lf
*.sh text eol=lf
```
- **O que faz:** Força o fim de linha `LF` mesmo durante o checkout no Windows.
- **Por que:** Scripts Bash e hooks do Husky **não funcionam** no Windows (via Git Bash) se contiverem caracteres `CRLF` (`\r`). Esta regra garante que, ao baixar o projeto, esses arquivos já venham no formato correto para execução imediata.

---

## 🚀 Comandos Úteis

Se você acabou de adicionar ou alterar o `.gitattributes` em um projeto existente, pode ser necessário "normalizar" o repositório com os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `git add . --renormalize` | Aplica as novas regras do `.gitattributes` a todos os arquivos rastreados. |
| `git commit -m "style: renormalize line endings"` | Salva a normalização no histórico do Git. |

---

### 💡 Dica de Expert
O `.gitattributes` é a sua "apólice de seguro" contra o erro `\r: command not found`. Ao manter este arquivo atualizado, você garante que novos membros da equipe, independentemente de estarem usando Windows, Mac ou Linux, consigam rodar o projeto sem precisar configurar manualmente o Git de suas máquinas.

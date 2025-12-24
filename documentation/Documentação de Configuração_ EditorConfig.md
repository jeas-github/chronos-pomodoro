# 🛠️ Documentação de Configuração: EditorConfig

O arquivo `.editorconfig` é um padrão da indústria que define e mantém estilos de codificação consistentes entre diferentes editores e IDEs. Ele é a base da padronização visual do projeto **chronos-pomodoro**.

---

## 🏗️ Estrutura do Arquivo `.editorconfig`

O arquivo utiliza uma sintaxe baseada em seções (glob patterns) para aplicar regras a diferentes tipos de arquivos.

---

## 🔧 Detalhamento das Configurações

### 1. Configuração Raiz (`root`)
```editorconfig
root = true
```
- **O que faz:** Informa ao editor que este é o arquivo de configuração principal e que ele deve parar de procurar por outros arquivos `.editorconfig` em pastas superiores.
- **Por que:** Garante que as configurações do sistema do desenvolvedor não interfiram nas regras do projeto.

### 2. Regras Globais (`[*]`)
Estas regras aplicam-se a praticamente todos os arquivos do projeto:

- **`end_of_line = lf`**: 
    - **Crítico para Windows:** Força o uso de Line Feed (`\n`). Isso evita que o Git detecte mudanças em todas as linhas de um arquivo apenas porque ele foi aberto em uma máquina Windows (que usa `CRLF`).
- **`indent_style = space` & `indent_size = 2`**:
    - Define o uso de 2 espaços para indentação. Espaços são preferíveis a Tabs para garantir que o código tenha a mesma aparência em qualquer monitor ou ferramenta de revisão de código (como o GitHub).
- **`trim_trailing_whitespace = true`**:
    - Remove automaticamente espaços em branco inúteis ao final das linhas, mantendo o código limpo e evitando "diffs sujos" no Git.
- **`insert_final_newline = true`**:
    - Garante que todo arquivo termine com uma linha vazia, seguindo os padrões de compatibilidade de ferramentas Unix/Linux.

### 3. Exceções de Execução (`[*.sh]` e Hooks)
```editorconfig
[*.sh]
[{pre-commit,commit-msg}]
end_of_line = lf
```
- **O que faz:** Reforça que scripts shell e hooks do Husky **devem** ser `LF`.
- **Por que:** No Windows, se um script `.sh` for salvo como `CRLF`, o interpretador Bash falhará ao tentar executá-lo. Esta regra é uma trava de segurança redundante ao `.gitattributes`.

---

## 🚀 Comandos Úteis

O EditorConfig não possui comandos de terminal; ele funciona de forma passiva. No entanto, para que ele funcione no VS Code, é necessário:
1.  Instalar a extensão **EditorConfig for VS Code**.
2.  O editor passará a aplicar estas regras automaticamente ao criar ou salvar arquivos.

---

### 💡 Dica de Expert
Se você abrir um arquivo e notar que ele ainda está em `CRLF` (indicado na barra inferior do VS Code), basta salvar o arquivo. Graças à nossa configuração de `files.eol: auto` no `settings.json`, o VS Code lerá este arquivo `.editorconfig` e converterá o fim de linha para `LF` instantaneamente no momento do salvamento.

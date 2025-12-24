# ⚓ Documentação de Automação: .husky/commit-msg

O arquivo `commit-msg` é um Git Hook gerenciado pelo **Husky**. Sua função é interceptar a mensagem de commit escrita pelo desenvolvedor e validá-la antes que o commit seja efetivado no histórico do Git.

---

## 🏗️ Funcionamento Técnico

O script é executado pelo Git imediatamente após o desenvolvedor salvar a mensagem de commit.

```sh
npx commitlint --edit "$1"
```

### Detalhamento do Comando:
- **`npx commitlint`**: Executa a ferramenta Commitlint sem a necessidade de instalação global, garantindo que a versão definida no `package.json` seja utilizada.
- **`--edit "$1"`**: 
    - O Git passa o caminho do arquivo temporário que contém a mensagem de commit como o primeiro argumento (`$1`).
    - O parâmetro `--edit` instrui o Commitlint a ler esse arquivo, validá-lo e, se necessário, apontar erros diretamente no terminal.

---

## 🔧 Propósito e Benefícios

### 1. Padronização Semântica
Garante que 100% das mensagens de commit sigam o padrão **Conventional Commits**. Isso elimina mensagens genéricas como "ajustes", "fix" ou "update", substituindo-as por descrições claras como `feat: add login validation`.

### 2. Automação de Changelog
Com mensagens padronizadas, ferramentas de automação podem ler o histórico do Git e gerar automaticamente arquivos de `CHANGELOG.md`, listando todas as novas funcionalidades e correções de bugs de forma organizada.

### 3. Disciplina de Equipe
Atua como um mentor automatizado. Se um desenvolvedor esquecer o padrão, o Husky abortará o commit e mostrará exatamente o que está errado, ensinando as boas práticas em tempo real.

---

## 🚀 Resolução de Problemas (Windows)

No Windows, este arquivo deve ser mantido com o fim de linha **LF**. Graças ao nosso `.gitattributes`, o Git garante que este arquivo sempre terá o formato correto ao ser baixado, evitando o erro comum de `\r: command not found` ao tentar realizar um commit.

---

### 💡 Dica de Expert
Se você precisar realizar um commit de emergência ignorando esta validação (o que não é recomendado), você pode adicionar a flag `--no-verify` ao seu comando de commit. No entanto, use isso com extrema cautela, pois mensagens fora do padrão quebram a automação de versionamento do projeto.

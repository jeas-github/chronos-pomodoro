# ⚓ Documentação de Automação: .husky/pre-commit

O arquivo `pre-commit` é o Git Hook mais crítico para a qualidade do código. Ele é executado automaticamente pelo **Husky** no momento em que o desenvolvedor dispara o comando `git commit`, mas antes que a mensagem de commit seja solicitada.

---

## 🏗️ Funcionamento Técnico

O script atua como um gatilho para a ferramenta de filtragem de arquivos.

```sh
npx lint-staged
```

### Detalhamento do Fluxo:
1.  **Intercepção:** O Git pausa o processo de commit e chama este script.
2.  **Filtragem:** O `npx lint-staged` lê a configuração dentro do `package.json`.
3.  **Execução:** Ele identifica quais arquivos estão na "Staging Area" (prontos para serem commitados) e aplica as regras de `eslint --fix` e `prettier --write` apenas neles.
4.  **Validação:** Se todas as ferramentas terminarem com sucesso, o commit prossegue. Se houver um erro que não possa ser corrigido automaticamente, o processo é interrompido.

---

## 🔧 Propósito e Benefícios

### 1. Código Sempre Limpo
Garante que 100% do código que entra no repositório esteja formatado e livre de erros básicos de linting. Isso elimina o famoso "commit de correção de lint" que polui o histórico.

### 2. Performance de Desenvolvimento
Ao usar o `lint-staged`, o hook não precisa validar o projeto inteiro (o que demoraria minutos em projetos grandes), mas apenas os arquivos que você alterou (o que leva segundos).

### 3. Redução de Erros em Produção
Ao rodar o ESLint antes do commit, evitamos que variáveis não utilizadas, imports quebrados ou lógica de hooks inválida cheguem ao servidor de build.

---

## 🚀 Resolução de Problemas (Windows)

Assim como o `commit-msg`, este arquivo deve ser mantido com o fim de linha **LF**. No Windows, se este arquivo for convertido para `CRLF`, o Git não conseguirá executá-lo, resultando em erros de permissão ou de comando não encontrado. O projeto está configurado via `.gitattributes` para prevenir este problema automaticamente.

---

### 💡 Dica de Expert
Este hook é o seu melhor amigo durante refatorações. Se você alterar algo que quebre uma regra de segurança do TypeScript ou do ESLint, o `pre-commit` te avisará imediatamente, antes mesmo de você tentar enviar o código para seus colegas. É a garantia de que a branch `main` permanecerá sempre estável.

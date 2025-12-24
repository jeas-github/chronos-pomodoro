# Documentação Técnica: Camada de Infraestrutura e Versão

Esta camada define como o projeto é armazenado, versionado e protegido contra inconsistências de ambiente, especialmente em ecossistemas híbridos (Windows/Linux).

## 1. .gitattributes

O arquivo `.gitattributes` é a "lei" do repositório. Ele sobrescreve as configurações globais de Git dos desenvolvedores para garantir que o código seja consistente.

### Propósito Técnico

- **Normalização de Line Endings:** Força o uso de `LF` (Line Feed) no repositório, evitando o erro comum de "arquivos fantasmas modificados" no Windows devido ao `CRLF`.
- **Integridade de Scripts:** Garante que scripts shell (`.sh`) e hooks do Husky nunca sejam convertidos para `CRLF`, o que impediria sua execução no Windows via Git Bash.

### Decisões de Configuração

| Regra                  | Descrição                                                                                                |
| :--------------------- | :------------------------------------------------------------------------------------------------------- |
| `* text=auto eol=lf`   | Define que todos os arquivos de texto devem ser salvos como `LF` no Git.                                 |
| `*.png binary`         | Garante que arquivos de imagem não sofram tentativas de conversão de texto, preservando sua integridade. |
| `.husky/* text eol=lf` | Regra crítica para que os hooks de commit funcionem em qualquer sistema operacional.                     |

---

## 2. .gitignore

O arquivo `.gitignore` define quais arquivos e diretórios não devem ser rastreados pelo Git. Isso mantém o repositório leve e seguro.

### Estrutura de Exclusão

A configuração segue o padrão moderno para projetos Vite + React:

1. **Dependências:** Exclui a pasta `node_modules/`, que deve ser instalada localmente via `npm install`.
2. **Build e Saída:** Exclui a pasta `dist/` (resultado da compilação) para evitar conflitos de versão em arquivos gerados automaticamente.
3. **Logs e Debug:** Remove arquivos de log (`npm-debug.log`, `yarn-error.log`) que poluem o histórico.
4. **Ambiente Local:** Bloqueia arquivos `.env` e `.env.local`, protegendo chaves de API e segredos de serem expostos publicamente.
5. **Configurações de IDE:** Embora algumas configurações de VS Code sejam compartilhadas, arquivos temporários e de cache da IDE são ignorados.

### Manutenção

> **Atenção:** Sempre que adicionar uma nova ferramenta que gere arquivos de cache ou segredos (ex: Firebase, AWS), certifique-se de atualizar este arquivo para evitar vazamento de dados.

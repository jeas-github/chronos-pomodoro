# 🧠 Documentação de Configuração: tsconfig.json (Raiz/Orquestrador)

O arquivo `tsconfig.json` na raiz do projeto atua como um orquestrador central. Ele utiliza o recurso de **Project References** do TypeScript para gerenciar múltiplos contextos de compilação de forma isolada e eficiente.

---

## 🏗️ Arquitetura de Orquestração

Diferente de projetos antigos onde um único arquivo geria tudo, este projeto utiliza uma estrutura modular:

- **`files: []`**: O arquivo raiz não contém arquivos próprios. Ele serve apenas como um ponto de entrada para as referências.
- **`references`**: Aponta para as sub-configurações:
    - `./tsconfig.app.json`: Regras para o código fonte da aplicação (React).
    - `./tsconfig.node.json`: Regras para as ferramentas de build e configuração (Vite/Node).

### Benefícios desta Abordagem
1.  **Isolamento de Tipos:** Impede que tipos do Node.js vazem para o código do navegador e vice-versa.
2.  **Performance:** O TypeScript pode compilar cada parte do projeto de forma independente, acelerando o tempo de resposta do editor e do build.

---

## 🔧 Detalhamento das Opções Globais

Embora as regras específicas estejam nos arquivos referenciados, o arquivo raiz define a "postura" global do projeto:

### 1. Segurança de Case (`forceConsistentCasingInFileNames`)
- **O que faz:** Obriga que as importações respeitem exatamente as letras maiúsculas e minúsculas dos nomes dos arquivos.
- **Por que:** No Windows, o sistema de arquivos ignora essa diferença, mas no Linux (onde o código será hospedado/compilado no CI/CD), ela é crítica. Esta flag evita o erro clássico de "funciona na minha máquina, mas quebra no servidor".

### 2. Rigor Técnico (`strict`)
- **O que faz:** Ativa o modo estrito do TypeScript globalmente.
- **Por que:** Garante que todas as sub-configurações herdem uma base sólida de segurança, exigindo que o desenvolvedor trate casos de `null`, `undefined` e tipagens ambíguas desde o início.

---

## 🚀 Comandos Úteis

| Comando | Descrição |
| :--- | :--- |
| `tsc --build` | Compila o projeto inteiro seguindo as referências deste arquivo. |
| `tsc --build --clean` | Remove os arquivos de cache e recompila tudo do zero. |

---

### 💡 Dica de Expert
Ao adicionar uma nova pasta de ferramentas (ex: uma pasta de scripts de automação), considere criar um novo `tsconfig.tools.json` e adicioná-lo às `references` aqui. Isso mantém seu projeto organizado e evita que bibliotecas de automação interfiram na inteligência do seu código React.

# 🧠 Documentação de Configuração: tsconfig.app.json

O arquivo `tsconfig.app.json` define as regras de compilação e análise estática específicas para o código fonte da aplicação React (pasta `src`). Ele é otimizado para funcionar em conjunto com bundlers modernos como o Vite.

---

## 🏗️ Estrutura e Escopo

- **`include: ["src"]`**: Restringe a atuação deste arquivo apenas aos arquivos dentro da pasta `src`. Isso evita que o TypeScript tente validar arquivos de configuração ou ferramentas de build com as regras da aplicação.
- **`composite: true`**: Permite que este arquivo seja referenciado pelo `tsconfig.json` raiz, habilitando builds incrementais e uma melhor organização do projeto.

---

## 🔧 Detalhamento das Opções de Compilação

### 1. Alvo e Ambiente (`target` & `lib`)
- **`target: ES2022`**: Define que o código será compilado para uma versão moderna do JavaScript, permitindo o uso de funcionalidades nativas como `Top-level await` e `Static class fields`.
- **`lib: ["ES2022", "DOM", "DOM.Iterable"]`**: Informa ao TypeScript que o código rodará em um navegador, fornecendo inteligência sobre APIs como `window`, `document` e métodos de iteração de listas.

### 2. Modo de Módulos (`Bundler Mode`)
- **`moduleResolution: bundler`**: Configuração otimizada para o Vite. Ela permite que o TypeScript entenda como o Vite resolve importações, incluindo suporte a pacotes que usam o campo `exports` no `package.json`.
- **`allowImportingTsExtensions: true`**: Permite importar arquivos com a extensão `.ts` explicitamente, o que é útil em fluxos de trabalho modernos.
- **`noEmit: true`**: Indica que o TypeScript não deve gerar arquivos `.js`. O papel de transformar o código é delegado inteiramente ao Vite (via SWC ou esbuild), deixando o TypeScript focado apenas na checagem de tipos.

### 3. Regras de Rigor (Linting)
O projeto adota uma postura de "tolerância zero" para código ambíguo:
- **`strict: true`**: Ativa todas as verificações rigorosas de tipo.
- **`noUnusedLocals` & `noUnusedParameters`**: Impede que variáveis ou parâmetros de função sejam declarados e não utilizados, mantendo o código limpo.
- **`noUncheckedSideEffectImports`**: Garante que importações de efeitos colaterais (como arquivos CSS) sejam validadas, evitando erros de caminho.

---

## 🚀 Integração com Vite

```json
"types": ["vite/client"]
```
- **O que faz:** Injeta as definições de tipo globais do Vite.
- **Benefício:** Permite que o TypeScript entenda importações de ativos (como `.svg`, `.css`, `.png`) e variáveis de ambiente (`import.meta.env`), fornecendo autocompletar e validação para esses recursos.

---

### 💡 Dica de Expert
A configuração `forceConsistentCasingInFileNames: true` está presente aqui como uma camada de segurança redundante. No Windows, isso é o que impede que você importe um componente como `./Component` quando o arquivo real é `component.ts`. Sem isso, seu projeto funcionaria na sua máquina, mas quebraria instantaneamente ao ser enviado para um servidor de deploy Linux.

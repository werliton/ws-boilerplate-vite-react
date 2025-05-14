# WS Boilerplate Vite + React – Solução Simples (`01-solucao-simples`)

Este boilerplate oferece uma base moderna, enxuta e pronta para produção com **React 18**, **Vite 5** e boas práticas de desenvolvimento frontend. Ideal para iniciar projetos profissionais de forma ágil, escalável e com monitoramento de performance desde o início.

---

## ✨ Features Principais

- ⚡ **Vite** – Build ultra rápido com hot reload instantâneo
- ⚛️ **React 18** – Com suporte a componentes funcionais e hooks
- 🎨 **Tailwind CSS v4** – Estilização moderna e utilitária
- 🧹 **ESLint + Prettier** – Padronização de código automatizada
- 🔎 **TypeScript** – Tipagem estática para maior confiabilidade
- 🚦 **React Router DOM** – Navegação SPA fluida
- 📊 **Bundle Analyzer com Vite/Rollup** – Diagnóstico visual e estratégico do tamanho final do bundle
- 🧪 **Vitest + Testing Library** – Pronto para testes unitários e de integração
- 📁 **Estrutura de pastas limpa e escalável**

---

## 🔍 Análise de Bundle (Rollup Visualizer)

Esta branch já vem configurada com o plugin [`rollup-plugin-visualizer`](https://www.npmjs.com/package/rollup-plugin-visualizer), que gera relatórios visuais do bundle da aplicação, ajudando a identificar dependências pesadas, chunks gerados e pontos de melhoria.

### ✅ Como usar

1. Faça o build do projeto:

   ```bash
   pnpm build
   ```

2. Após o build, será gerado um arquivo interativo `dist/bundle-report.html` na raiz do projeto com o relatório do bundle.

3. Abra o arquivo no navegador para visualizar o mapa de dependências e pesos dos módulos.

📖 Veja o artigo completo sobre esse setup no Dev.to:  
[🔗 Análise de Bundle com Vite + Rollup por Werliton](https://dev.to/werliton/analise-seu-app-como-um-heroi-benchmarking-com-vite-rollup-em-projetos-react-ak)

---

## 💡 Lighthouse CI

O projeto está configurado com **Lighthouse CI** para monitoramento automatizado de performance, acessibilidade e boas práticas.

### Como funciona

- Ao abrir um pull request para `main`, o workflow do GitHub Actions executa o Lighthouse CI e gera relatórios.
- Os resultados incluem notas de performance, acessibilidade, melhores práticas e SEO.
- Os dados ficam disponíveis como artefato no GitHub.

### Estrutura

- Workflow configurado em `.github/workflows/bundle-report.yml`
- Arquivo de configuração: `lighthouserc.js`

> Mais informações [AQUI](https://googlechrome.github.io/lighthouse-ci/)

### Comando local (opcional)

```bash
pnpm lhci autorun
```

> 💡 Dica: Ideal para times que querem manter a qualidade desde o início do projeto.

---

## 🚀 Como Iniciar

### Instalação

```bash
git clone -b 01-solucao-simples https://github.com/werliton/ws-boilerplate-vite-react.git

cd ws-boilerplate-vite-react

pnpm install
```

### Ambiente de desenvolvimento

```bash
pnpm dev
```

### Build para produção + análise de bundle

```bash
pnpm build
```

### Testes

```bash
pnpm test
```

---

## 📦 Dependências Principais

| Pacote                       | Finalidade                                  |
| ---------------------------- | ------------------------------------------- |
| `react` / `react-dom`        | Biblioteca principal de UI                  |
| `vite`                       | Bundler moderno e rápido                    |
| `tailwindcss`                | Utilitários CSS para estilização            |
| `eslint` / `prettier`        | Padronização e formatação de código         |
| `vitest` / `testing-library` | Testes unitários e de integração            |
| `rollup-plugin-visualizer`   | Análise visual do bundle gerado pelo Vite   |
| `@lhci/cli`                  | Coleta e upload de relatórios Lighthouse CI |
| `GitHub Actions`             | CI/CD automatizado com testes e auditorias  |

---

## 🧑‍💻 Autor

**Werliton Silva**  
🔗 [LinkedIn](https://www.linkedin.com/in/werliton-silva)  
📝 [Dev.to](https://dev.to/werliton)

---

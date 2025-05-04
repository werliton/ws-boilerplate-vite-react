# Plano de Testes E2E – ws-boilerplate-vite-react

Este documento descreve os testes end-to-end (E2E) planejados para validar os fluxos principais da aplicação utilizando Playwright.

## 📁 Estrutura sugerida para testes

```
tests/
├── home.spec.ts
├── navigation.spec.ts
├── 404.spec.ts
├── component-interactions.spec.ts
```

---

## ✅ Funcionalidades e Cenários

### 🏠 Funcionalidade: Acesso à página inicial

**Cenário: Carregar a home**

- **Dado** que o usuário acessa a URL `/`
- **Então** a aplicação deve exibir o título principal com o texto "Boilerplate"
- **E** a navegação deve estar visível

### 🧩 Funcionalidade: Interação com componentes

**Cenário: Interagir com botão na home**

- **Dado** que o usuário está na página inicial
- **Quando** clica no botão "Clique aqui"
- **Então** um texto de resposta ou estado alterado deve aparecer

---

### 📱 Funcionalidade: Layout responsivo (opcional)

**Cenário: Acessar em modo mobile**

- **Dado** que o usuário acessa o site em um dispositivo com largura de 375px
- **Então** os elementos devem se adaptar para visualização mobile
- **E** o menu deve estar acessível (ex: hambúrguer)

---

### ⚡ Funcionalidade: Performance básica (opcional)

**Cenário: Carregamento da home**

- **Dado** que o usuário acessa a home
- **Então** a página deve carregar completamente em até 2 segundos

---

## 📌 Observações

- Os testes serão escritos com [Playwright](https://playwright.dev/).
- A URL base é `http://localhost:5173`.
- Os testes podem ser executados com `npx playwright test`.

---

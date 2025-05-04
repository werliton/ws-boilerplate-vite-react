# 🧪 Benchmark - Simples vs Reducer vs Others

## 📦 Tamanho do bundle

| Métrica            | Simples  | Other |
| ------------------ | -------- | ----- |
| Tamanho total (KB) | 104.9 KB | -- KB |
| Maior chunk        | 90.13 KB | -- KB |
| src/               | 3.17 KB  | -- KB |

> Fonte: `bundle-report.html`

---

## 🚀 Lighthouse

| Métrica       | Simples | Other |
| ------------- | ------- | ----- |
| Performance   | 100     | --    |
| Accessibility | 90      | --    |
| SEO           | 82      | --    |
| FCP (s)       | 0.4     | --    |
| LCP (s)       | 0.4     | --    |

> Rodado com: `npm run preview` + `lighthouse http://localhost:4173`

---

## 🏗️ Tempo de Build

```bash
$ time npm run build
# Simples: 3.96s
```

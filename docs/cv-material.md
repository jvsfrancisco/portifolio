# Material para o CV

Texto que saiu do carrossel de projetos do site em 12/11/2026 para deixar os cards curtos.
Serve para o CV em PDF e para entrevistas.

## Serena Biquínis: o que eu fiz

- PDV que vende mesmo sem internet, no computador e no celular.
- Abertura e fechamento de caixa, cashback e troca no balcão.
- Painel financeiro: fluxo de caixa, contas a pagar, DRE e conciliação bancária.
- A página de links da loja.
- Deploy com 4 pipelines e rollback por SHA.

Sistema interno da loja, sem link público. As telas aparecem no site com autorização da dona.

## Serena Biquínis: por dentro

- PDV como PWA offline-first: sem internet, a venda vai para uma fila no IndexedDB e sincroniza numa rota idempotente, sem duplicar pedido.
- Painel financeiro: fluxo de caixa, contas a pagar, DRE, conciliação bancária por CSV, meta do mês e Web Push.
- Medusa v2 com 11 módulos próprios, PostgreSQL e Redis, em Docker na Oracle Cloud.
- Deploy com 4 pipelines no GitHub Actions, rollback por SHA, OpenTelemetry e Grafana Cloud.

## Serena Biquínis: bastidores

- **O cashback parou de cair.** Nenhum erro, e nenhum cashback. O grafo de pedidos do Medusa devolvia items.quantity como undefined. Passei a ler items.detail.quantity.
- **Catálogo de ~4,3 s para ~0,5 s.** Mediana em produção, com 170 produtos e 647 variantes. Consultas em paralelo, cortei uma relação que custava ~1,2 s e pus cache invalidado por evento: 474 ms sem o cache, 45 ms com ele.
- **Troca de banco com 49 s fora do ar.** Do Neon para PostgreSQL numa VM da Oracle Cloud, com 153 tabelas conferidas. Uma query foi de ~125 ms para menos de 1 ms. O Neon ficou guardado para rollback. Foi antes de a loja começar a usar o sistema.

## Sites de clientes

Layout responsivo, tema claro e escuro, eventos de conversão no GA4, Microsoft Clarity só depois do consentimento de cookies, SEO com sitemap e dados estruturados e API do Instagram com fallback estático. Nem todo site tem tudo.

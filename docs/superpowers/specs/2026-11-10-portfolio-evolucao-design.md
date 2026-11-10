# Portfólio: evolução da colagem (hierarquia, cenas e movimento)

Data: 2026-11-10. Executor: Codex. Revisão: Claude + inspetor (`taste-skill/scripts/inspect.mjs`).

## Intenção

O site atual é bonito em cada peça, mas confuso e "simplista" no conjunto. Diagnóstico medido e visto em screenshots:

- Todo bloco tem o mesmo peso (fita, rotação, sombra, rótulo mono). Não há hierarquia.
- 17 tamanhos de fonte, 10 rótulos mono em caixa alta, 66 sombras, 27 fios, 23 bordas tracejadas.
- Os mesmos fatos (Serena, Azzas, Quazz) aparecem 4 vezes: hero, "resumo de 30 s", Projetos, Trajeto.
- Só creme + roxo, sem nenhum momento de escala ou contraste. Movimento limitado a abrir/fechar.
- IA é a seção mais densa e usa nomes internos (Brain, Harness, Tucano, Orquestração) sem explicar.
- As telas da Serena, o melhor material visual, ficam pequenas atrás de linhas "abrir/fechar".

Objetivo: mesmo visual de colagem (mesa, papéis, fitas, recibo), mas legível em 5 segundos, com 3 momentos fortes de movimento. "Robusto" vem de profundidade nesses momentos, não de mais blocos.

## Metas

1. Um visitante de 5 segundos entende: quem é, o que faz, onde trabalha, o que provou (Serena em produção).
2. Hierarquia clara: 1 coisa grande por tela, o resto pequeno.
3. Três cenas de scroll com movimento de verdade (abaixo).
4. Cada fato dito uma vez, no lugar certo.
5. Acessível e rápido: teclado, foco visível, `prefers-reduced-motion`, sem layout shift.

## Não-metas

- Trocar de brand, de fontes (Bricolage Grotesque) ou de paleta base.
- Novas rotas/páginas (rejeitado: opção C).
- Trocar stack (TanStack Start, React 19, CSS à mão). Única dependência nova: `motion`.
- Inventar conteúdo, métricas, clientes ou depoimentos.

## Anti-metas (falha mesmo que "funcione")

- Mais animação espalhada: fade-up em toda seção, hover em todo card.
- Mais blocos, mais rótulos, mais fita. Cada adição precisa substituir algo.
- Conteúdo que só aparece se o JS rodar.

## Abordagens consideradas

- A. Reorganizar + cenas só com CSS/IntersectionObserver. Baixo risco; recibo pinado fica menos fluido.
- **B (escolhida pelo usuário). A + `motion` só nas 3 cenas.** Pin e scroll-linked reais; custa ~5 KB.
- C. B + rotas `/serena` e `/ia`. Melhor para clareza, mas dobra o escopo; descartada.

## Decisões de design

### Hierarquia (valem para a página inteira)
- No máximo 5 tamanhos de fonte: display, título de seção, lead, corpo (≥16 px, tinta cheia), pequeno.
- Títulos de seção em no máximo 2 linhas em qualquer largura.
- Rótulo mono em caixa alta: só no cabeçalho do recibo e em código. Fora isso, texto sentence-case na fonte normal. Remover eyebrows ("Versão de 30 segundos", "Olá =)" etc.): a informação vai para o título ou para a frase de apoio.
- Sombras e fita só em papéis que "flutuam" de verdade (1 nível de sombra). Sem fio tracejado decorativo. Sem emoji (trocar ✗ ✓ por texto ou SVG com `aria-label`).
- Margens externas iguais à esquerda e à direita (hoje 136 px vs 152 px). Nada colado na borda a 768 px.
- Parágrafos até ~65 caracteres por linha.

### Estrutura e conteúdo (cada fato uma vez)
1. **Hero**: nome grande, uma linha do que faz, uma frase de apoio, 2 ações (CV, Fala comigo). A foto vira o elemento de cena do hero. O "resumo de 30 s" deixa de ser cartão duplicado: o hero absorve a primeira frase; as outras linhas vão para as cenas (Serena, IA) ou somem.
2. **Projetos**: Serena em tela cheia (Cena 2). Azzas e Quazz/Clientes como duas fichas simples abaixo, sem accordion duplo; "abrir" só quando há conteúdo extra real.
3. **IA**: reduzida a uma explicação em linguagem comum + a regra central (IA não publica sem o "sim"; tela só é pronta depois de eu ver). Painéis internos (Brain, Harness, Tucano, Orquestração) viram detalhe opcional, com 1 frase cada dizendo o que é, antes do nome (Cena 3).
4. **Skills + Trajeto**: viram uma só história, o recibo (Cena 1). Remove a linha de ícones JS/TS/React/Node duplicada; as skills ficam nas linhas do recibo, agrupadas por onde foram usadas (como já está em `content/skills.ts`).
5. **Contato**: mantém o papel kraft; ganha 1 ação principal (e-mail) e links secundários.

### Cena 1: o recibo do PDV (ideia do site)
O trajeto (Driven 2022 → ITShare → MDM → Azzas → Quazz/Serena → PUC-Rio → hoje) é um recibo térmico que "imprime" linha por linha conforme o scroll, pinado na tela. Cada linha: período, lugar, o que fez, stack. Total no fim: "Em produção desde 19/09/2026". Usa `--recibo` (#FBF7EE) e Plex Mono (único lugar permitido). Sem JS ou com reduced-motion: recibo completo e estático. Conteúdo vem de `content/timeline.ts` e `content/skills.ts`.

### Cena 2: Serena em tela cheia
Pin curto: as telas reais (`serena-pdv-desktop`, `-carrinho`, `-mobile`, `-links`, logo, loja) entram em sequência, trocam com transição de papel (recortes sobrepostos), e o texto lateral muda junto: o que fiz, R$ 15 mil+ em vendas, 571 commits/69 PRs, stack. Os "bastidores" (cashback, catálogo 4,3 s → 0,5 s, troca de banco 49 s) entram como notas coladas depois, dados exatamente como em `content/`.

### Cena 3: IA com freio
Linha única de 4 passos que se desenha ao rolar: classifica → escolhe o executor → checa (build, lint) → revisa e só então publica, com o "sim" humano como o passo final destacado. Os números do benchmark (91 execuções etc.) ficam num papel de apoio, com a ressalva de amostra pequena que já existe.

### Movimento (orçamento)
- Biblioteca: `motion` (`scroll`, `animate`, `inView`), só dentro das 3 cenas.
- Fora das cenas: entrada simples, uma vez, só em transform/opacity; estados de hover/focus/press em botões e links. Nada além disso.
- Todo movimento tem fallback `prefers-reduced-motion` que mantém o conteúdo e remove o deslocamento.
- Sem conteúdo escondido se o JS falhar (progressive enhancement).

## Restrições

- Manter `pnpm verify` verde (tipos, lint Biome, testes de conteúdo em `test`, build). Os testes de invariantes de conteúdo não podem ser enfraquecidos; se um fato for movido, o teste acompanha.
- Conteúdo vem de `src/content/*`. Não copiar texto para JSX.
- Performance: imagens com `width/height`, `loading="lazy"` abaixo da dobra, sem CLS.
- Mobile é composição própria (390 px), não o desktop espremido.

## Critério de pronto

- `pnpm verify` passa.
- `inspect.mjs`: 0 FAIL a 1440/768/390 nos itens que dependem desta evolução (eyebrow, micro-label, emoji, edge-text, shadow, hairline, off-centre). Mono e creme são decisões de marca mantidas e entram no relatório como defendidas.
- Máximo de 5 tamanhos de fonte.
- As 3 cenas funcionam com scroll, teclado e `prefers-reduced-motion`.
- Claude revisa screenshots finais e a crítica de design antes de dar como feito.

## Fica por conta do construtor

Detalhes de timing/easing (usar `--ease-out` já definido), nomes de componentes, divisão em commits (um por cena), organização dos CSS em `src/styles/`.

## Decisões minhas (confirmar)

- Manter IBM Plex Mono só no recibo.
- Fundir "resumo de 30 s" no hero em vez de manter cartão separado.
- Esconder detalhes internos de IA atrás de "ver como funciona", não removê-los.

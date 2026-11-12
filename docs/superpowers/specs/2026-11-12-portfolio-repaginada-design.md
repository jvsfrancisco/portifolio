# Portfólio: repaginada (colagem + organização editorial)

Data: 2026-11-12. Substitui `2026-11-10-portfolio-evolucao-design.md` (removido).

## Intenção

Manter a colagem (papel, fita, recorte, crachá) e trocar a organização da página por uma mais editorial e legível, no espírito do portfólio de referência (EduardoDev). A referência foi vista no navegador; o que se aproveita é **estrutura e recursos de composição**, não identidade.

O que o site de referência faz bem, e que entra aqui:
- Tipografia gigante: título em fonte condensada e pesada, com uma palavra em itálico serifado destacada.
- Faixas diagonais (marquee) cruzando a página. Aqui viram fita adesiva com texto.
- Crachá pendurado por cordão como elemento do hero. Aqui é um papel com foto e dados.
- Seções que alternam claro e escuro, com cantos arredondados na emenda.
- Frase-chave com marca-texto no parágrafo de apresentação.
- Menu em overlay (botão Menu, links grandes, Fechar).
- Projetos em carrossel escuro, com contador "n / total", barra de progresso e nome do projeto.
- Habilidades em linhas grandes (categoria + etiquetas) e currículo em lista datada.

O que **não** entra: o verde-limão, as fontes dele, o retrato de texto ASCII, os textos e o código. Paleta e identidade continuam as do João (creme, tinta, roxo, kraft).

## Decisões do usuário (12/11)

1. Substituir o spec de 10/11.
2. Sem numeração de seções.
3. Projetos em carrossel: projetos pessoais (Feiras Cariocas), sistemas (PDV) e sites.

## Decisões minhas (confirmar)

- No carrossel entram só entregas autorais: Serena (PDV e financeiro), os três sites de clientes e, quando houver material, Feiras Cariocas. A Azzas é emprego e vai para o currículo, com o detalhe numa `<details>` nativa.
- Feiras Cariocas **não tem imagens nem texto no repo**. O modelo de dados aceita a entrada; nada é inventado. Sem material, ela fica de fora.
- A seção de IA continua como está nesta rodada (já era densa; reduzi o escopo para não misturar duas reescritas). Fica como próximo passo.
- Fonte nova: uma serifada em itálico (Instrument Serif) só para a palavra de destaque. Display condensado vem do eixo de largura do Bricolage Grotesque, sem trocar a fonte base.

## Estrutura da página

1. **Header**: logo/nome + botão Menu. Overlay em tinta com links grandes e Fechar. Foco preso no overlay, Esc fecha.
2. **Hero** (creme): nome gigante com uma palavra em itálico, uma linha do que faz, 2 ações (CV em PDF, Fala comigo), crachá com foto e dados (local, hoje, estudo, "em produção desde 19/09/2026"). Fita diagonal em fita com as funções.
3. **Sobre** (creme): um parágrafo grande, com marca-texto nas frases-chave. Substitui o cartão "resumo de 30 s".
4. **Projetos** (tinta): título gigante, carrossel. Cada slide: tipo, nome, descrição, stack, telas em recorte com fita, link quando existe. Serena tem "ver o sistema por dentro" (`<details>`) com bastidores.
5. **IA** (creme): como está.
6. **Habilidades** (tinta): linhas grandes por grupo, etiquetas à direita.
7. **Currículo** (creme): lista datada (Azzas, Quazz, MDM, ITShare) e formação (PUC-Rio, Driven). Azzas com detalhe em `<details>`.
8. **Contato** (kraft): e-mail como ação principal, links secundários. Já existe.

## Regras

- Conteúdo em `src/content/*`, componentes só desenham. Projetos saem do JSX para `src/content/projects.ts`.
- Carrossel: `scroll-snap` com todos os slides no DOM, botões anterior/próximo com `aria-label`, contador e barra de progresso, alcançável por teclado, sem dependência nova, sem sequestro de scroll.
- `prefers-reduced-motion`: sem marquee animado, sem deslocamento; o conteúdo continua lá.
- Sem conteúdo que dependa de JS para existir. Marquee é CSS.
- No máximo 5 tamanhos de fonte fora do display gigante. Corpo ≥ 16px.
- Imagens com `width`/`height`, `loading="lazy"` abaixo da dobra.
- Mobile é composição própria (390 px).
- Nada de inventar conteúdo, métricas, clientes ou depoimentos.

## Critério de pronto

- `pnpm verify` verde (tipos, Biome, testes, build). Testes de conteúdo acompanham os dados movidos, sem enfraquecer.
- Screenshots a 1440, 768 e 390 revisados.
- Menu, carrossel e `<details>` funcionam por teclado.

## Pendências fora do repo

- Feiras Cariocas: prints, link e uma linha do que é.
- Revisar a seção de IA no mesmo espírito.

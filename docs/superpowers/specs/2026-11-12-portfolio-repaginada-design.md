# Portfólio: repaginada (colagem + organização editorial)

Data: 2026-11-12. Substitui `2026-11-10-portfolio-evolucao-design.md` (removido).

## Revisão de 12/11 (depois do primeiro retorno do João). Vale sobre o resto do documento

Rejeitado como "AI slop" e removido: menu em overlay gigante, fonte serifada em itálico, fita diagonal com palavras passando, palavra gigante em contorno no fundo do carrossel, parágrafo que acende palavra por palavra, título do hero letra a letra, foto redonda no crachá, título condensado em caixa alta.

O que ficou no lugar:
- **Tipografia:** uma família só (Bricolage Grotesque). Títulos em `.hd`, com a palavra de destaque recortada em papel (`.cw`), como o site já fazia em "Fala comigo." e em "com freio". Tamanhos moderados.
- **Menu:** links à vista no computador; em tela estreita, um papel pequeno colado com fita embaixo do botão Menu.
- **Crachá:** foto em 3x4 (recorte inscrito na foto redonda do arquivo). Balança sozinho e, com mouse, dá para arrastar.
- **Sobre:** frase de abertura sobre a Azzas 2154 e, ao lado, a mesa com os recortes das marcas (FARM Rio, Animale, BYNV, Off Premium), que dá para arrastar com mouse. Legenda diz que as homes não são trabalho do João.
- **Projetos:** carrossel sem palavra de fundo; tipo do projeto em etiqueta de rotuladora, stack em linha, números da Serena num recibo.
- **Habilidades:** adesivos de papel com a logo (`simple-icons`) para o que tem ícone; etiqueta de rotuladora para o que não tem.
- **Easter egg:** crédito "Feito com tesoura, fita e código por Quazz" no rodapé; ao clicar, o cristal é recortado e colado com fita, e o site da Quazz abre.
- **Movimento:** só em resposta a ação (arrastar, clicar, trocar de slide, abrir menu), mais o balanço do crachá.

Pendente de confirmação do João: a frase "um dos maiores grupos de moda da América Latina, dono de FARM Rio, Animale, Hering e Reserva" (`src/content/profile.ts`).

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
- Movimento é parte da identidade (decisão de 12/11: o orçamento de animação do spec antigo foi relaxado). Biblioteca: `motion`. Peças:
  - fitas diagonais cuja velocidade e sentido seguem a velocidade do scroll;
  - crachá que balança sozinho e pode ser arrastado (mola);
  - parágrafo do Sobre que "acende" palavra por palavra no scroll;
  - título do hero entrando letra a letra (CSS);
  - menu em overlay com revelação em círculo;
  - carrossel com a palavra gigante de fundo em paralaxe e telas que entram no slide ativo.
- `prefers-reduced-motion`: fitas e crachá parados, parágrafo já aceso, sem paralaxe; o conteúdo continua lá.
- Sem conteúdo que dependa de JS para existir: o texto renderiza completo no servidor e as animações entram depois da hidratação.
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

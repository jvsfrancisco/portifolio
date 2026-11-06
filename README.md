# Portfólio · João Victor Francisco

TanStack Start (React 19, Vite, Nitro) com CSS à mão. Visual de colagem: papéis recortados, fitas, etiquetas de rotuladora.

```bash
pnpm dev        # http://localhost:3000
pnpm verify     # tipos + lint + testes + build (rode antes de publicar)
```

## Onde mexer

| Quero… | Mexo em |
| --- | --- |
| trocar texto do topo, resumo, contato, CV | `src/content/profile.ts` |
| acrescentar uma skill | `src/content/skills.ts` (no grupo certo) |
| acrescentar um período no trajeto | `src/content/timeline.ts` |
| trocar título, descrição da página | `src/content/site.ts` |
| mudar texto de um painel de IA | `src/components/sections/ai/panels/*Panel.tsx` |
| acrescentar um projeto (Feiras Cariocas, Hub da Quazz) | criar `XProject.tsx` em `src/components/sections/projects/` e incluir em `ProjectsSection.tsx`; estado da linha em `useProjectHoles.ts` |
| cores, sombras, movimento | `src/styles/tokens.css` |
| imagens | `public/img/` (nomes semânticos) |

## Arquitetura

```
src/
  content/          dados tipados (types.ts); os componentes só desenham
  components/
    collage/        peças do visual reutilizáveis (Tape)
    sections/       uma pasta/arquivo por seção; a rota só compõe
      ai/           AiSection + panels/ (um painel por aba, registro id -> componente)
      projects/     ProjectsSection + um componente por projeto + useProjectHoles
  routes/           __root.tsx (head, fontes) e index.tsx (composição)
  styles/           tokens, base, collage e um arquivo por assunto; ordem em index.css = ordem da cascata
tests/              invariantes do conteúdo (sem {{ }}, sem vazio, datas no mesmo formato, painel para cada aba)
```

## Estado

- Portado e verificado no navegador a 1440 px: topo, projetos, IA (5 abas), skills, trajeto, rodapé.
- **Não verificado em 390 px** (celular): o CSS responsivo veio idêntico do protótipo, mas ainda não foi aberto.
- **Pendente:** `public/cv-joao-victor-francisco.pdf` não existe; o botão "CV em PDF" aponta para ele.
- Movimento: a abertura das abas é uma dobra de papel em duas etapas (`ai.css`, tokens `--ease-out` e `--dur-fold`).
- Dívida conhecida: o protótipo usa muito estilo inline; os overrides de celular dependem de `!important` (regra do biome desligada por isso). Mover o inline para classes é o próximo passo de manutenção.
- Regras de a11y desligadas só em `projects/` (`biome.jsonc`): a colagem é atalho de mouse, o teclado usa o botão da etiqueta; as faixas de recortes são regiões roláveis focáveis.

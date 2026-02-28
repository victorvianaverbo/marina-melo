# Especificação de Layout - Sua Marca Segura

## Tipografia Global
- **Heading:** DM Serif Display (var(--font-heading))
- **Body:** DM Sans (var(--font-body))
- **Vibe:** Editorial contemporâneo e sofisticado, transmitindo autoridade jurídica premium sem ser antiquado.

## Paleta de Cores Global (Premium Light)
- **Primary:** #1A2B5E (Azul Marinho profundo)
- **Accent Gold:** #C4973A (Dourado premium)
- **Accent Light:** #F0C050 (Dourado claro para highlights)
- **Bg Main:** #FFFFFF (Branco puro)
- **Bg Alt:** #F7F5F0 (Off-white acinzentado aquecido)
- **Bg Subtle:** #EEF1F8 (Azul super claro)
- **Text Main:** #1A2B5E (Igual ao primary)
- **Text Body:** #4A5568 (Cinza chumbo suave)

---

## Seção 1: Hero (Existente / Referência)

### Arquétipo e Constraints
- **Arquétipo:** Split Assimétrico (Layout dividido visualmente, com proporção 55/45)
- **Constraints:** Glassmorphism (Glass badge flutuante), Shadow Depth.
- **Justificativa:** Cria uma tensão visual interessante e dá protagonismo instantâneo tanto à copy quanto à visualização de "Certificado INPI" de forma sofisticada.

### Conteúdo
- **Headline:** Alguém pode estar registrando o nome do seu negócio hoje.
- **Subheadline:** Ter um CNPJ não impede que a concorrência roube sua marca. Garanta sua exclusividade no INPI, evite processos e proteja tudo o que você construiu até aqui.
- **CTA:** Quero Proteger Minha Marca Agora

### Layout
- `display: grid; grid-template-columns: 1fr 1fr;`
- Altura mínima `100vh`.
- Container da esquerda (conteúdo) com padding assimétrico: `padding: 4rem 10% 4rem 15%`.
- Container da direita (visual) com `padding: 2rem` e `background-color: #EEF1F8`.

### Tipografia
- **Label Premium:** 0.875rem, uppercase, letter-spacing 0.1em, font-weight 600, color #C4973A.
- **Headline:** `clamp(3rem, 5vw, 4.5rem)`, letter-spacing -0.03em, #1A2B5E, line-height 1.1.
- **Subheadline:** 1.125rem, #4A5568, max-width 480px.

### Cores
- Fundo texto: #FFFFFF
- Fundo imagem: #EEF1F8
- Botão CTA: Gradiente Linear (135deg, #1A2B5E 0%, #2A4080 50%, #1A2B5E 100%)

### Elementos Visuais
- Imagem de hero com overlay linear-gradient (`rgba(26, 43, 94, 0.2)` para `transparent`) e mix-blend-mode `multiply`.
- Badge em Glassmorphism (`rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(16px)`).

### Animações
- Botão (Hover Lift): `transform: translateY(-4px)`, shadow intensa `0 15px 35px rgba(26, 43, 94, 0.6)`.

---

## Seção 2: O Risco Iminente (Existente / Atualização)

### Arquétipo e Constraints
- **Arquétipo:** Broken Grid (Grid 2 colunas, mas com o visual transbordando o fluxo normal).
- **Constraints:** Hover Lift, Asymmetric Padding.
- **Justificativa:** A quebra do grid reforça o conceito de "risco iminente", tirando a estabilidade da página sutilmente.

### Conteúdo
- **Título:** Você está construindo o sonho de outra pessoa ou o seu?
- **Texto 1:** Legalmente, a sua marca só é sua se você tiver o certificado do INPI. Imagine investir anos em clientes, fachada, redes sociais e anúncios para, do dia para a noite, receber uma notificação extrajudicial com prazo de 48 horas exigindo que você pare de usar o próprio nome.
- **Texto 2 (Highlight):** Agir hoje custa infinitamente menos do que recomeçar do zero.

### Layout
- Padding da seção: `8rem 0`. Fundo sólido.
- Grid: `grid-template-columns: 1fr 1fr`, gap `6rem`.
- Card de notificação posicionado com sobreposição sutil em relação ao grid padrão.

### Tipografia
- **Título:** `clamp(2.5rem, 4vw, 3.5rem)`, DM Serif Display.
- **Texto:** 1.125rem, DM Sans.
- **Highlight:** font-weight 500, color #1A2B5E, border-left `2px solid #C4973A`, padding-left `1.5rem`.

### Cores
- Fundo: #F7F5F0 (Bg Alt).
- Sinalizador do card (Dot): #E53E3E (Vermelho alerta).

### Animações e Interatividade
- **Risk Card Hover:** `transform: translateY(-10px); box-shadow: 0 30px 60px rgba(26, 43, 94, 0.1)`. Transição `0.5s cubic-bezier(0.16, 1, 0.3, 1)`.

---

## Seção 3: Consequências do Atraso

### Arquétipo e Constraints
- **Arquétipo:** Bento Box.
- **Constraints:** Grain Overlay (Textura para reforçar o drama e perdas), Dark Mode (Inversão de cores na seção), Hover Glow.
- **Justificativa:** Substitui a abordagem de "3 cards genéricos" por um design imersivo, escuro, que transmite seriedade. O formato bento box organiza pesos diferentes para as três consequências.

### Conteúdo
- **Título da Seção:** O que acontece se você adiar o registro?
- **Item 1:** **Roubo Legalizado:** Concorrentes podem registrar seu nome primeiro e desviar seus clientes de forma totalmente dentro da lei.
- **Item 2:** **Indenizações Pesadas:** Riscos de multas altíssimas (até 5% do faturamento) por uso de marca já registrada por terceiros.
- **Item 3:** **Rebranding Forçado:** Ser obrigado a descartar sua logo, site, embalagens e uniformes às pressas.

### Layout
- Container width: `max-width: 1200px; padding: 10rem 2rem;`.
- **CSS Grid (Bento Box):**
  - Desktop: `grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto; gap: 1.5rem;`
  - Item 1 (Roubo Legalizado): `grid-column: span 2; grid-row: span 1;`
  - Item 2 (Indenizações Pesadas): `grid-column: span 1; grid-row: span 2;` (Mais vertical)
  - Item 3 (Rebranding Forçado): `grid-column: span 2; grid-row: span 1;`
- **Box Padding:** `3rem` interno em cada box.
- `border-radius: 20px;`

### Tipografia
- **Section Title:** `clamp(3rem, 5vw, 4rem)`, text-align center, `margin-bottom: 5rem`, color #FFFFFF.
- **Box Title:** DM Serif Display, `2rem`, color #C4973A (Gold), `margin-bottom: 1rem`.
- **Box Text:** DM Sans, `1.125rem`, color rgba(255,255,255,0.7), line-height 1.6.

### Cores & Elementos Visuais
- **Fundo da Seção:** #0B132C (Azul marinho ultra escuro, quase preto).
- **Fundo das Bento Boxes:** #132047 (Azul marinho intermediário) + border sutil `1px solid rgba(196, 151, 58, 0.2)`.
- **Textura:** Aplicação de `noise texture / Grain Overlay` sutil (`opacity: 0.04`, `mix-blend-mode: overlay`) apenas no fundo das caixas Bento, criando sensação física e crua (urgência/problema).

### Animações e Interatividade
- **Hover das caixas (Hover Glow):** Border-color desliza para #C4973A, e `box-shadow` ativa com `0 0 40px rgba(196, 151, 58, 0.15)`. Transição `400ms ease`.
- **Scroll Triggered:** As bento boxes usam `fade-up` com `stagger` via AOS (delay 100, 200, 300).

---

## Seção 4: Como Funciona (Nossa Solução)

### Arquétipo e Constraints
- **Arquétipo:** Scroll Cinematico / Storytelling Vertical.
- **Constraints:** Sticky Element, Stagger, Draw SVG.
- **Justificativa:** Em vez de blocos de texto chatos, explicamos os 4 passos através de uma linha vertical fixa que é "desenhada" conforme o scroll, conectando os passos cinematicamente.

### Conteúdo
- **Título:** Sua marca blindada em 4 passos ágeis e sem burocracia.
- **01.** **Diagnóstico de Viabilidade:** Uma análise profunda para saber se o seu nome está livre ou se já corre perigo.
- **02.** **Estratégia de Proteção:** Definimos as classes de registro perfeitas para blindar todos os seus serviços atuais e os planos de expansão.
- **03.** **Protocolo Expresso no INPI:** Preparamos a documentação o mais rápido possível para garantir a sua "dianteira" na fila. Você foca no negócio e nós na papelada.
- **04.** **Monitoramento 360º:** Mantemos vigilância constante no INPI contra espertinhos tentando aprovar nomes parecidos com o seu.

### Layout
- Fundo: #FFFFFF. `padding: 12rem 0`.
- Layout 2 colunas assimétricas (`40% / 60%`).
- Coluna Esquerda: Título da seção em `position: sticky; top: 20vh;`.
- Coluna Direita: Os 4 steps em lista empilhada, com `margin-bottom: 8rem` em cada item.

### Tipografia
- **Section Title (Sticky):** DM Serif Display, `clamp(3rem, 5vw, 4rem)`, color #1A2B5E, leading 1.1, max-width: 400px.
- **Número do Step:** DM Sans, `1.5rem`, color #C4973A, font-weight 700.
- **Step Title:** DM Serif Display, `2.5rem`, color #1A2B5E, `margin: 0.5rem 0 1rem;`.
- **Step Text:** DM Sans, `1.25rem`, color #4A5568, max-width: 500px.

### Elementos Visuais e Interatividade
- **Draw SVG:** Uma linha vertical (`width: 2px`) ao lado da coluna direita. Conforme o usuário faz o scroll, usando intersecção simples via AOS ou JS minificado customizado, a linha (preenchida de #EEF1F8) ganha um preenchimento em Dourado (#C4973A).
- Ao realizar scroll e o Step X chegar no centro da tela (`~50vh`), ocorre um leve scale no título do Step (`scale: 1.05`, `color: #C4973A` no título temporariamente), chamando foco.

---

## Seção 5: Diferenciais (Por que a SMS?)

### Arquétipo e Constraints
- **Arquétipo:** Type Hero / Editorial Monolítico.
- **Constraints:** Text Reveal, Bleed Left, Color Overlay.
- **Justificativa:** Evitar os "ícones com textinho". Queremos dar peso jurírico, focar nas palavras fortes como "Transparência" e "Especialistas" usando tipografia gigante emparelhada para chamar a atenção.

### Conteúdo
- **Título (Intro sutil):** Por que as empresas que valorizam seu patrimônio escolhem a SMS?
- **Diferencial 1:** **Especialistas Reais (Não robôs):** Seu processo analisado por quem tem visão jurídica e de mercado, diferente das plataformas de "registro em massa".
- **Diferencial 2:** **Agilidade no Protocolo [DIFERENCIAL DE MERCADO]:** Rapidez total para dar entrada no INPI e garantir sua preferência de registro antes dos correntes.
- **Diferencial 3:** **Garantia de Transparência:** Trabalhamos sem "asteriscos" ou taxas surpresa "escondidas" no meio do processo. Você sabe exatamente o investimento.

### Layout
- Container Full width. `min-height: 100vh; padding: 10rem 0;`. Fundo #F7F5F0.
- Cada diferencial é uma linha HORIZONTAL (row) que cruza a tela toda.
- Layout de cada row: `display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #DDE2EC; padding: 4rem 10%;`.

### Tipografia
- **Título da seção:** centralizado no topo: `1.125rem`, uppercase, letter-spacing 0.1em, color #8896A8, `margin-bottom: 6rem`.
- **Diferencial Title (Grande):** DM Serif Display, `clamp(3rem, 6vw, 5rem)`. Começa parcialmente fora da margem esquerda pelo container (Bleed Left sutil).
- **Diferencial Text:** DM Sans, `1.125rem`, color #4A5568, max-width `400px`, alinhado à direita. Onde tem caixa alta [DIFERENCIAL DE MERCADO], usar um badge dourado.

### Animações (Text Reveal)
- Cada diferencial entra na tela com "Text Reveal": Um clip-path / overflow hidden que revela o texto grande vindo de baixo para cima `translateY(100%) -> translateY(0)`.
- **Hover Lift Row:** Ao passar o mouse sobre a "linha" inteira do diferencial, fundo `transitiona` para #FFFFFF puro e o texto grande assume color #C4973A suavemente (`600ms cubic-bezier(0.16, 1, 0.3, 1)`).

---

## Seção 6: Sobre Nós / Autoridade

### Arquétipo e Constraints
- **Arquétipo:** Rule of Thirds (1/3 imagem, 2/3 texto).
- **Constraints:** Parallax Layers, Imagem com Overlay (Duotone elegante), Asymmetric Padding.
- **Justificativa:** Transmite confiança ao colocar um rosto e história por trás da empresa, num layout assimétrico sofisticado. 

### Conteúdo
- **Título:** Mais do que registro, proteção patrimonial.
- **Texto:** Fundada por Marina Melo, a SMS existe para transformar marcas em ativos inabaláveis. Acreditamos que o seu nome carrega sua história, seu investimento e seus sonhos. Nosso propósito é atuar com força jurídica para garantir que ninguém possa roubar isso de você.

### Layout
- Fundo: #EEF1F8. `padding: 10rem 0;`.
- Grid: `grid-template-columns: 4fr 6fr; align-items: center`.
- Imagem à esquerda, encostando parcialmente na margem inferior (`margin-bottom: -4rem` para vazar a seção de baixo se possível, gerando overlap).
- Texto à direita, com muito respiro (`padding-left: 5rem`).

### Elementos Visuais e Cores
- **Imagem:** Portrait da fundadora Marina Melo. Placeholder usando `/.netlify/images` com overlay em CSS para esquentar a foto com as cores da marca.
- `mix-blend-mode: multiply` ou um leve `#1A2B5E` com 10% overlay na imagem para integrar com o Azul Marinho. Border-radius `10px` e shadow `0 20px 40px rgba(0,0,0,0.05)`.

### Tipografia
- **Título:** DM Serif Display, `clamp(3rem, 4.5vw, 4rem)`, color #1A2B5E, `margin-bottom: 2rem`.
- **Texto:** DM Sans, `1.25rem`, color #4A5568, line-height `1.8`, `max-width: 500px`.

### Animações
- **Parallax Layers:** Ao fazer scroll, a imagem da Marina move-se numa velocidade mais lenta que o texto (`translateY` ligado ao viewport - pode ser simulado com CSS ou leve atraso dependendo do AOS se ativo de forma complexa, mas no papel será um movimento sutil in-out).

---

## Seção 7: FAQ

### Arquétipo e Constraints
- **Arquétipo:** Minimal + Accordion Customizado.
- **Constraints:** Hover Underline animado (linha de separação age ativamente), Clip Reveal (para a resposta).
- **Justificativa:** Manter o layout "Limpo", focado apenas nas dúvidas, sem carregar visualmente.

### Conteúdo
- **3 Perguntas e Respostas conforme `copy.md`.** (O meu CNPJ..., Quanto tempo demora..., O que acontece se minha marca já tiver...).

### Layout
- Fundo: #FFFFFF. Container estreito `max-width: 900px`, margin automática. Padding: `10rem 2rem`.
- Accordion List: `display: flex; flex-direction: column`.
- Cada Accordion Item: `border-bottom: 1px solid #DDE2EC; padding: 2.5rem 0`.

### Tipografia
- **Pergunta:** DM Sans, `1.5rem`, color #1A2B5E, font-weight 500, cursor `pointer`. Ícone de "+" do lado direito (dourado).
- **Resposta:** DM Sans, `1.125rem`, color #4A5568, `margin-top: 1.5rem`, `line-height: 1.6`, com badge bold simulado no final (O relógio está correndo, Prioridade).

### Animações
- **Hover Underline / Row:** Hovering sobre a pergunta, a cor muda sutilmente e a borda inferior `#DDE2EC` anima virando `#C4973A` via posição absoluta e `scaleX(1)`.
- **Clip Reveal:** Ao clicar para abrir a resposta, a div exibe-se com `max-height` animado + opacity, de forma suave (`500ms cubic-bezier`). Ícone `+` roda `45deg`.

---

## Seção 8: Footer (CTA Final)

### Arquétipo e Constraints
- **Arquétipo:** Spotlight (Centro das atenções isolado).
- **Constraints:** Gradient background sutil animado, Texto com Sombra Colorida, Floating CTA Button.
- **Justificativa:** Conversão. Nenhum distrator, foco completo na CTA e reforço do medo da perda ("Não deixe o futuro do seu negócio nas mãos da sorte").

### Conteúdo
- **Headline:** Não deixe o futuro do seu negócio nas mãos da sorte ou da concorrência.
- **Subheadline:** Fale com um especialista agora e descubra se o seu nome está disponível antes que alguém seja mais rápido.
- **CTA:** Chamar Especialista no WhatsApp

### Layout
- Altura `60vh`, `display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;`.
- Fundo: #1A2B5E (Primary Dark Mode).

### Tipografia
- **Headline:** DM Serif Display, `clamp(3.5rem, 6vw, 4.5rem)`, color #FFFFFF, `max-width: 900px`, `margin-bottom: 2rem`.
- **Subheadline:** DM Sans, `1.25rem`, color rgba(255,255,255,0.8), `max-width: 600px`, `margin-bottom: 4rem`.

### Visual e Cores e CTA
- Botão CTA: Inspirado no Hero, porém ainda mais chamativo. `background: #25D366` (Cor base do WhatsApp modificada para harmonizar ou usamos o Dourado como primary-action: `#C4973A`). Botão deve pulsar com leve escala de `scale: 1` para `scale: 1.05` num loop infinito muito lento de respiração. `box-shadow: 0 0 30px rgba(196, 151, 58, 0.4)`. Letras grandes: 1.125rem, font-weight 600.
- Spotlight no fundo: Um `radial-gradient(circle at center, rgba(196, 151, 58, 0.15) 0%, transparent 60%)` por debaixo do texto.

---

O documento está pronto para ser implementado fielmente pelo workflow `/desenvolver`. Cada detalhe e cor tem uma base sutil nas recomendações do constraints da Direção de Arte.

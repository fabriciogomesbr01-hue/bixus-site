# Como publicar o site da Bixus (grátis)

Este site é um conjunto de arquivos estáticos (HTML/CSS/JS) — não depende de banco de dados nem de servidor especial. Isso permite publicar **de graça** em qualquer um dos serviços abaixo, todos profissionais e usados por empresas reais.

## Opção recomendada: Netlify (mais fácil, sem digitar comando nenhum)

1. Crie uma conta grátis em https://app.netlify.com (pode entrar com Google ou GitHub).
2. Na tela inicial, procure a área "Deploy manually" / arraste e solte.
3. Arraste a pasta `bixus` inteira (com os 5 arquivos `.html` e a pasta `assets`) para essa área.
4. Em poucos segundos o Netlify gera um link tipo `https://nome-aleatorio.netlify.app` — o site já está no ar.
5. Em **Site settings > Domain management** você pode:
   - Trocar o subdomínio grátis por algo como `bixus-pet.netlify.app`;
   - Ou conectar um domínio próprio (ex: `www.bixus.com.br`) se o cliente já tiver um registrado — o Netlify emite HTTPS grátis automaticamente.

**Onde o site fica hospedado?** Nos servidores do Netlify (Netlify, Inc. — EUA), mesma infraestrutura usada por milhares de empresas. O cliente pode acessar o painel a qualquer momento para ver estatísticas, logs e trocar domínio.

## Alternativas gratuitas equivalentes

- **Vercel** (https://vercel.com) — mesmo princípio do Netlify, também com domínio próprio grátis.
- **Cloudflare Pages** (https://pages.cloudflare.com) — ótimo se no futuro quiser usar outros recursos da Cloudflare (proteção, cache).
- **GitHub Pages** (https://pages.github.com) — grátis, exige uma conta no GitHub; mais indicado se você já usa Git.

Todas essas opções são gratuitas para um site institucional como este, incluem HTTPS (cadeado de segurança) e permitem apontar um domínio próprio.

## Se o cliente já tiver hospedagem própria (cPanel, HostGator, KingHost etc.)

Basta enviar os 5 arquivos `.html` e a pasta `assets` via FTP ou pelo gerenciador de arquivos do painel de hospedagem, para a pasta pública do site (geralmente `public_html` ou `www`). Não é necessário nenhum ajuste no código — os arquivos funcionam em qualquer hospedagem que sirva HTML puro.

## Antes de rodar a campanha no Google Ads

1. Publique o site em um domínio (próprio ou o subdomínio grátis) e confirme que abre em celular e computador.
2. Configure o Google Tag Manager / Google Ads e, se quiser medir conversões, adicione o Google Analytics (GA4) e o `gtag('event', ...)` de conversão — o `script.js` já dispara um evento `contact_click` a cada clique no WhatsApp/telefone, pronto para conectar ao GA4 ou ao Google Ads.
3. Revise o número de WhatsApp em todos os botões (atualmente configurado para **(27) 99258-8879**).
4. Ajuste textos, preços e depoimentos de exemplo antes de divulgar — alguns são placeholders para você validar com o cliente.

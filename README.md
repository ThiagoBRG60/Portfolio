<h1 align="center">
  Portfólio
</h1>

<p align="center">
   <img alt="Top language" src="https://img.shields.io/github/languages/top/ThiagoBRG60/Portfolio?style=flat-square&color=6F32F3">
   <img alt="Language Count" src="https://img.shields.io/github/languages/count/ThiagoBRG60/Portfolio?style=flat-square&color=6F32F3">
   <img alt="Repository Size" src="https://img.shields.io/github/repo-size/ThiagoBRG60/Portfolio?style=flat-square&color=6F32F3">
   <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/ThiagoBRG60/Portfolio?style=flat-square&color=6F32F3">
   <img alt="GitHub forks" src="https://img.shields.io/github/forks/ThiagoBRG60/Portfolio?style=flat-square&color=6F32F3">
</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/7be608c8-39d0-4e90-b92d-6afb10153ec0" alt="project demo"/>
</div>

## 📝 Descrição

Meu portfólio pessoal desenvolvido com foco em performance, segurança e experiência do usuário. Apresenta meus projetos e habilidades através de uma interface moderna, com renderização 3D de um planeta interativo.

O projeto conta com frontend e backend integrados e inclui uma API para envio de emails através do formulário de contato, com rate limiting e validações de segurança.

Todo o projeto foi otimizado para carregamento rápido, com assets comprimidos e implementações customizadas no lugar de bibliotecas pesadas.

## 🚀 Funcionalidades

- Exibição de projetos pessoais com páginas de detalhes completas
- Demonstrações em vídeo dos projetos em ação
- Modelo 3D interativo de planeta renderizado com Three.js
- Grid de tecnologias adaptativo com navegação fluida
- Formulário de contato com validação e rate limiting
- Menu mobile com interação drag-to-close nativa
- Página 404 customizada
- Design totalmente responsivo

## 💻 Tecnologias

**Frontend:**
- React
- Next.js
- TypeScript
- Tailwind CSS

**Backend:**
- Next.js API Routes
- Resend (envio de emails)
- Upstash Redis (rate limiting e cache)

## 📚 Bibliotecas

- Three.js, React Three Fiber e React Three Drei (renderização 3D)
- React Hook Form (gerenciamento de formulários)
- Zustand (gerenciamento de estado)
- Swiper (carrosséis)
- Holy Loader (indicador de carregamento)

## ⚡ Performance e Otimizações

Esse projeto foi desenvolvido com atenção especial à performance, garantindo carregamento rápido mesmo em conexões lentas.

**Otimização de Assets:**
- **Modelo 3D:** Reduzido de 6 MB para 162 KB através de conversão de texturas para WebP, redução de resolução (2048px → 1024px/512px) e Draco compression
- **HDR:** Comprimido de 1.5 MB para 380 KB com conversão para EXR e compressão lossy
- **Vídeos:** Comprimidos para no máximo 1.74 MB no total (5 vídeos) usando ffmpeg com CRF, redução de FPS (60 → 48) e resolução (1080p → 720p)
- **Fontes:** Convertidas de OTF para WOFF2, pesando apenas alguns KB
- **PDF:** Comprimido de 400 KB para 83 KB
- **Imagens:** Formato WebP e SVG otimizados, PNGs comprimidos

**Estratégias de Carregamento:**
- **SVG Sprite Sheets:** Ícones de tecnologias unificados em um único arquivo SVG com referências por ID, reduzindo de 15+ requisições para apenas 1
- **Font Awesome removido:** Criação de sprite sheet SVG customizado com apenas os ícones necessários, eliminando 300 KB de biblioteca com 2000+ ícones não utilizados

**Otimizações React:**
- **Redução de re-renders:** De 500-600 disparos para 15-20, substituindo eventos `scroll` e `resize` por `Intersection Observer` e `window.matchMedia` com evento `change`
- **Menu mobile nativo:** Implementação com eventos `pointer` sem dependências externas, atualizando diretamente o DOM e evitando re-renders no React

**Segurança e Formulário:**
- **React Hook Form:** Eliminação de re-renders a cada caractere digitado
- **Rate limiting:** 4 requisições por hora por IP usando Upstash Redis com sliding window
- **Ephemeral cache:** Dados mantidos em memória para evitar consultas excessivas ao Redis quando rate limit é atingido
- **Validação dupla:** Client-side e server-side, impedindo bypass mesmo via cURL

## 🗂️ Estrutura

O portfólio é dividido em seções e páginas:

**Página Principal:**
- **Home** - Apresentação inicial
- **Sobre Mim** - Informações pessoais e profissionais
- **Tecnologias** - Grid interativo com as tecnologias que utilizo
- **Projetos** - Carrossel de projetos com links para repositório, demo e detalhes
- **Contato** - Formulário funcional para envio de mensagens

**Páginas Individuais:**
- **Detalhes do Projeto** - Descrição completa, tecnologias, funcionalidades, desafios, aprendizados e demonstração em vídeo
- **404** - Página de erro customizada

## 📬 Contato

Para dúvidas ou sugestões, entre em contato:

<a href="mailto:thiagocorreadev@gmail.com" title="Gmail">
   <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-DO-SEU-GMAIL" alt="Gmail"/>
</a>

## 📄 Licença

Esse repositório é disponibilizado apenas para fins de portfólio e demonstração.

Copyright © 2026 Thiago Correa. Todos os direitos reservados.

Consulte o arquivo [LICENSE](./LICENSE) para os termos completos de uso.

<hr/>

⭐ Se esse projeto te inspirou de alguma forma, considere deixar uma estrela!
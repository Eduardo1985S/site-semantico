# 🚀 Site Semântico Moderno

> Um projeto demonstrativo de desenvolvimento web profissional usando HTML5 semântico, CSS3 avançado e melhores práticas de acessibilidade.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-semantic-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-modern-blue.svg)
![Accessibility](https://img.shields.io/badge/a11y-WCAG%202.1-green.svg)
![Mobile](https://img.shields.io/badge/mobile-responsive-green.svg)

## � Índice

- [Visão Geral](#-visão-geral)
- [Características](#-características)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias](#-tecnologias)
- [Design System](#-design-system)
- [Semântica e Acessibilidade](#-semântica-e-acessibilidade)
- [Performance](#-performance)
- [Como Usar](#-como-usar)
- [Personalização](#-personalização)
- [Contribuição](#-contribuição)

## � Visão Geral

Este projeto demonstra a implementação de um site moderno e profissional utilizando as melhores práticas de desenvolvimento frontend, com foco em:

- **HTML Semântico**: Estrutura significativa e acessível
- **CSS Moderno**: Design system com variáveis CSS e layout responsivo
- **Acessibilidade**: Conformidade com WCAG 2.1 AA
- **Performance**: Otimizações para carregamento rápido
- **SEO**: Meta tags e estrutura otimizada para buscadores

## ✨ Características

### 🎨 Design & UX
- Design moderno e profissional
- Interface responsiva (mobile-first)
- Animações suaves e micro-interações
- Paleta de cores consistente
- Tipografia otimizada (Inter font)

### 🔧 Técnicas
- HTML5 semântico com roles ARIA
- CSS Grid e Flexbox
- Custom Properties (CSS Variables)
- Metodologia BEM para classes
- Mobile-first responsive design

### ⚡ Performance
- Carregamento otimizado de fontes (`display=swap`)
- Lazy loading para imagens
- CSS otimizado e minificado
- Sem dependências JavaScript desnecessárias

### 🌐 Acessibilidade
- Conformidade WCAG 2.1 AA
- Navigation com ARIA labels
- Contraste adequado de cores
- Suporte completo a screen readers
- Navegação por teclado

## 📁 Estrutura do Projeto

```
site-semantico/
├── 📄 index.html                    # Página inicial
├── 📖 README.md                     # Documentação do projeto
├── 📁 src/                          # Código fonte
│   ├── 📁 assets/                   # Recursos estáticos
│   │   ├── 📁 css/                  # Folhas de estilo modulares
│   │   │   ├── 🎨 main.css          # Arquivo principal (importa módulos)
│   │   │   ├── 🔧 variables.css     # Variáveis CSS e design tokens
│   │   │   ├── 🌐 base.css          # Reset CSS e estilos globais
│   │   │   ├── 🔨 utilities.css     # Classes utilitárias
│   │   │   ├── 📐 layout.css        # Layout e grid system
│   │   │   ├── 🧩 components.css    # Componentes da UI
│   │   │   ├── 📄 pages.css         # Estilos específicos das páginas
│   │   │   └── 📱 responsive.css    # Media queries e responsividade
│   │   ├── 📁 images/               # Imagens do projeto
│   │   └── 📁 js/                   # Scripts JavaScript
│   └── 📁 pages/                    # Páginas HTML
│       ├── 📄 sobre.html            # Página sobre
│       ├── 📄 contato.html          # Página de contato
│       ├── 📄 politica-privacidade.html # Política de privacidade
│       ├── 📄 termos-uso.html       # Termos de uso
│       ├── 📄 cookies.html          # Política de cookies
│       └── 📄 suporte.html          # Central de suporte
├── 📁 docs/                         # Documentação
└── 📁 public/                       # Arquivos públicos
```

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| HTML5 | Latest | Estrutura semântica |
| CSS3 | Latest | Estilização avançada |
| Google Fonts | - | Tipografia (Inter) |
| Picsum Photos | - | Imagens placeholder |

## 🎨 Design System

### Paleta de Cores

```css
/* Cores Primárias */
--primary-50: #eff6ff;   /* Background claro */
--primary-500: #3b82f6;  /* Cor principal */
--primary-900: #1e3a8a;  /* Cor escura */

/* Cores Neutras */
--gray-50: #f9fafb;      /* Background */
--gray-500: #6b7280;     /* Texto secundário */
--gray-900: #111827;     /* Texto principal */
```

### Tipografia

```css
/* Tamanhos de Fonte */
--font-size-xs: 0.75rem;     /* 12px */
--font-size-base: 1rem;      /* 16px */
--font-size-4xl: 2.25rem;    /* 36px */

/* Pesos */
--font-weight-normal: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Espaçamento

```css
/* Sistema de Espaçamento (baseado em 0.25rem) */
--space-1: 0.25rem;    /* 4px */
--space-4: 1rem;       /* 16px */
--space-12: 3rem;      /* 48px */
--space-20: 5rem;      /* 80px */
```

## 🔍 Semântica e Acessibilidade

### Estrutura HTML Semântica

```html
<header role="banner">          <!-- Cabeçalho principal -->
<nav role="navigation">         <!-- Navegação -->
<main role="main">              <!-- Conteúdo principal -->
<section aria-labelledby="..."> <!-- Seções identificadas -->
<footer role="contentinfo">     <!-- Rodapé -->
```

### Recursos de Acessibilidade

- **ARIA Labels**: Navegação e seções identificadas
- **Skip Links**: Navegação rápida por teclado
- **Alt Text**: Descrições para todas as imagens
- **Focus Management**: Estados de foco visíveis
- **Screen Reader**: Textos para leitores de tela

### Validação WCAG 2.1

| Critério | Status | Detalhes |
|----------|--------|----------|
| Contraste de Cor | ✅ | Mínimo 4.5:1 |
| Navegação por Teclado | ✅ | Tab order lógico |
| Screen Reader | ✅ | Markup semântico |
| Focus Indicators | ✅ | Estados visíveis |

## ⚡ Performance

### Métricas Alvo

| Métrica | Alvo | Status |
|---------|------|--------|
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |

### Otimizações Implementadas

- **Fonts**: `display=swap` para evitar FOIT
- **Images**: Lazy loading e formato WebP
- **CSS**: Variáveis para reduzir repetição
- **HTML**: Estrutura enxuta e semântica

## 🚀 Como Usar

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/site-semantico.git
cd site-semantico
```

### 2. Abra no Navegador

```bash
# Abra o index.html diretamente ou use um servidor local
python -m http.server 8000
# ou usando Node.js
npx serve .
```

### 3. Desenvolvimento

Para desenvolvimento local, você pode usar qualquer servidor web simples.

## 🎨 Personalização

### Alterando Cores

Modifique as variáveis CSS no `:root`:

```css
:root {
    --primary-500: #your-color;  /* Cor principal */
    --primary-600: #darker-color; /* Versão mais escura */
}
```

### Adicionando Novas Seções

```html
<section class="custom-section" aria-labelledby="custom-title">
    <div class="container">
        <h2 id="custom-title">Título da Seção</h2>
        <p>Conteúdo da seção...</p>
    </div>
</section>
```

### Customizando Cards

```html
<article class="card">
    <img src="image.jpg" alt="Descrição" class="card-image">
    <h3>Título do Card</h3>
    <p>Descrição do conteúdo...</p>
</article>
```

## 📱 Compatibilidade

### Navegadores Suportados

| Navegador | Versão Mínima |
|-----------|---------------|
| Chrome | 88+ |
| Firefox | 85+ |
| Safari | 14+ |
| Edge | 88+ |

### Dispositivos

- ✅ Desktop (1280px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit as mudanças: `git commit -m 'Add nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

### Guidelines

- Mantenha a semântica HTML
- Siga o padrão de variáveis CSS
- Teste a acessibilidade
- Documente mudanças significativas

## ‍💻 Autor

**Seu Nome**
- GitHub: [@eduardo1985s](https://github.com/seu-usuario)
- LinkedIn: [eduardo-correia](https://www.linkedin.com/in/eduardo-correia-dev/)
- Email: edutechtreinamentos@gmail.com

## 🙏 Agradecimentos

- [Inter Font](https://fonts.google.com/specimen/Inter) - Tipografia moderna
- [Picsum Photos](https://picsum.photos/) - Imagens placeholder
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Diretrizes de acessibilidade

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!

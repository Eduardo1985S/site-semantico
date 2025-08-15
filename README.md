# Projeto: Página Exemplo HTML/CSS

Este projeto demonstra a criação de uma página web moderna e responsiva usando HTML5 e CSS3, com foco em boas práticas de desenvolvimento front-end.

## 📁 Estrutura do Projeto

```
projeto/
├── index.html                 # Página principal
└── assets/
    └── css/
        └── style.css         # Estilos da aplicação
```

## 🏗️ Arquitetura da Página

### HTML - [`index.html`](index.html)

A estrutura HTML é organizada semanticamente com as seguintes seções:

#### **Header (Cabeçalho)**
```html
<header>
    <h1>Minha Página Exemplo</h1>
    <nav>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
    </nav>
</header>
```
- Contém o título principal e navegação
- Utiliza tags semânticas para melhor acessibilidade

#### **Banner**
```html
<section class="banner">
    <h2>Bem-vindo ao seu novo site!</h2>
    <p>Um banner bonito para chamar atenção.</p>
</section>
```
- Seção de destaque com gradiente de fundo
- Mensagem principal da página

#### **Citação**
```html
<section class="citacao">
    <blockquote>
        "O sucesso é a soma de pequenos esforços repetidos dia após dia."
        <span>- Robert Collier</span>
    </blockquote>
</section>
```
- Seção inspiracional com citação
- Usa `<blockquote>` para citações semânticas

#### **Cards**
```html
<section class="cards">
    <div class="card">
        <h3>Card 1</h3>
        <p>Conteúdo do card 1.</p>
    </div>
    <!-- Mais 3 cards... -->
</section>
```
- Grid de cards com conteúdo
- Layout responsivo e flexível

#### **Footer (Rodapé)**
```html
<footer>
    <p>&copy; 2025 Minha Página Exemplo</p>
    <nav>
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
    </nav>
</footer>
```
- Informações de copyright e links legais

## 🎨 CSS - [`assets/css/style.css`](assets/css/style.css)

### **Variáveis CSS (Custom Properties)**
```css
:root {
    --primary-color: #0d47a1;
    --primary-light: #1976d2;
    --primary-lighter: #42a5f5;
    --bg-light: #f7f9fa;
    /* ... mais variáveis */
}
```
**Benefícios:**
- Centralização de cores e valores
- Fácil manutenção e personalização
- Consistência visual em todo o projeto

### **Reset e Configurações Globais**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- Remove margens e paddings padrão
- `box-sizing: border-box` para cálculos mais previsíveis

### **Layout Flexbox**
```css
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
```
- Layout de página completa
- Footer sempre no final da página

### **Container Responsivo**
```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}
```
- Centralização automática
- Largura máxima para melhor legibilidade
- Padding lateral para dispositivos móveis

### **Grid Layout para Cards**
```css
.cards .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}
```
**Características:**
- **`auto-fit`**: Ajusta automaticamente o número de colunas
- **`minmax(250px, 1fr)`**: Cards com largura mínima de 250px
- **`gap`**: Espaçamento uniforme entre cards

### **Efeitos e Transições**
```css
.card {
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 4px 16px rgba(13, 71, 161, 0.13);
    transform: translateY(-2px);
}
```
- Animações suaves nos cards
- Efeito de elevação no hover

### **Design Responsivo**
```css
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        align-items: flex-start;
    }
    /* Mais ajustes para mobile... */
}
```
- Breakpoint em 768px para tablets/mobile
- Layout adaptativo para diferentes telas

## 🚀 Funcionalidades Implementadas

### ✅ **Responsividade**
- Grid adaptativo para cards
- Navigation responsiva no header
- Ajustes de espaçamento para mobile

### ✅ **Acessibilidade**
- Tags semânticas HTML5
- Hierarquia correta de headings (h1, h2, h3)
- Links com estados de hover

### ✅ **Performance**
- Fonte Google Fonts otimizada (`display=swap`)
- CSS otimizado com variáveis
- Transições suaves sem impacto na performance

### ✅ **Visual Design**
- Paleta de cores consistente
- Tipografia profissional (Roboto)
- Sombras e gradientes modernos
- Espaçamento harmonioso

## 🛠️ Como Usar

1. **Abra o projeto:**
   ```bash
   # Clone ou baixe os arquivos
   # Abra index.html em um navegador
   ```

2. **Personalização:**
   - Modifique as variáveis CSS em `:root` para mudar cores
   - Ajuste o conteúdo dos cards no HTML
   - Adicione novas seções seguindo a estrutura existente

3. **Adicionando novos cards:**
   ```html
   <div class="card">
       <h3>Novo Card</h3>
       <p>Seu conteúdo aqui.</p>
   </div>
   ```

## 📱 Compatibilidade

- ✅ Chrome/Edge (moderno)
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móveis
- ✅ Tablets

## 🎯 Conceitos Demonstrados

1. **HTML Semântico**: Uso correto de tags semânticas
2. **CSS Grid**: Layout moderno e responsivo
3. **Flexbox**: Alinhamento e distribuição de elementos
4. **Custom Properties**: Variáveis CSS para manutenção
5. **Media Queries**: Responsividade para diferentes telas
6. **Transições CSS**: Animações suaves e profissionais

Este projeto serve como base sólida para páginas web modernas e pode ser facilmente expandido com novas funcionalidades e seções.

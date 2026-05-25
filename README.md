# HT Estética Automotiva

Landing page moderna e responsiva para HT Estética Automotiva - serviço de polimento e detalhamento automotivo com atendimento a domicílio em Sorocaba e região.

## 📋 Sobre o Projeto

Site de apresentação profissional com foco em conversão, apresentando:
- **Hero section** com chamada à ação principal
- **Serviços** ofertados pela empresa
- **Sobre** a empresa e seus diferenciais
- **Pacotes** de serviços com preços
- **Depoimentos** de clientes
- **FAQ** com dúvidas frequentes
- **Contato** e integração com WhatsApp
- **Painel de ajustes** para personalização de cores e estilos em tempo real

## 🚀 Stack Tecnológico

- **React 18.3** - Framework UI
- **Vite 5** - Build tool e dev server
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS
- **PostCSS + Autoprefixer** - CSS processing

## 🛠️ Como Começar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abre a aplicação em `http://localhost:5173` com hot reload automático.

### Build para Produção

```bash
npm run build
```

Gera arquivos otimizados em `dist/`.

### Preview da Build

```bash
npm run preview
```

Visualiza a build de produção localmente.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx          # Navegação principal
│   │   └── Footer.tsx       # Rodapé
│   ├── sections/
│   │   ├── Hero.tsx         # Seção hero
│   │   ├── Services.tsx     # Serviços
│   │   ├── About.tsx        # Sobre
│   │   ├── Packages.tsx     # Pacotes/Preços
│   │   ├── Testimonials.tsx # Depoimentos
│   │   ├── Faq.tsx          # Perguntas frequentes
│   │   ├── Contact.tsx      # Contato
│   │   └── BeforeAfter.tsx  # Antes/Depois
│   └── ui/
│       ├── Icons.tsx        # Ícones customizados
│       ├── Atmosphere.tsx   # Fundos decorativos
│       ├── FloatingWhatsApp.tsx # Botão flutuante WhatsApp
│       └── TweaksPanel.tsx  # Painel de ajustes
├── hooks/
│   └── useScrollReveal.tsx  # Hook para animações de scroll
├── lib/
│   ├── tweaks.ts           # Sistema de personalização de cores
│   └── whatsapp.ts         # Utilitários para WhatsApp
├── App.tsx                 # Componente raiz
├── main.tsx               # Entry point
└── index.css              # Estilos globais
```
## 📱 Recursos Principais

### Animações
- Reveal de elementos ao scroll com stagger effect
- Atmosfera decorativa com camadas de fundo

### Integração WhatsApp
- Link dinâmico para iniciar conversa no WhatsApp
- Botão flutuante fixo na tela

### Responsividade
- Design mobile-first
- Otimizado para todos os tamanhos de tela
- Tailwind CSS para estilos responsivos

### Performance
- Build otimizado com Vite
- Tree-shaking automático
- CSS purificado
- Lazy loading de imagens

## 🔗 Links Importantes

- **WhatsApp**: Integrado em CTA buttons
- **Analytics**: Pronto para integração
- **SEO**: Meta tags e estrutura semântica

## 📝 Variáveis de Ambiente

Atualmente o projeto não requer variáveis de ambiente, mas está pronto para integração com:
- APIs externas
- Analytics
- CMS

## 📄 Licença

Propriedade da HT Estética Automotiva

---
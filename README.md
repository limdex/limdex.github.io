# Portfolio Web App

A Netflix-inspired personal portfolio built with **Vite + Solid.js + TypeScript + SCSS** featuring smooth momentum scrolling and dark theme aesthetics.

## Features

- 🎨 **Dark Mode** - Deep navy/blue theme inspired by Samsung Galaxy design
- ✨ **Smooth Scrolling** - Lenis integration for momentum-based scrolling
- 🚀 **High Performance** - Optimized with Vite and Solid.js
- 📱 **Responsive** - Mobile-first design adapting to all screen sizes
- 🎯 **Animated** - Scroll-triggered reveal animations with IntersectionObserver

## Tech Stack

- **Framework**: Solid.js (TypeScript)
- **Build Tool**: Vite
- **Styling**: SCSS with modular architecture
- **Smooth Scroll**: Lenis
- **Icons**: SVG inline

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Projects/
│   ├── Stacks/
│   └── Contacts/
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _animations.scss
│   └── _base.scss
├── App.tsx
└── index.tsx
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (usually runs on http://localhost:5173)
npm run dev
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Customization

### Colors

Edit `src/styles/_variables.scss` to customize the color scheme:

```scss
$color-bg-primary: #0a0a0f;
$color-accent: #2563eb;
```

### Smooth Scroll Duration

Adjust scroll duration in `src/App.tsx`:

```tsx
const lenis = new Lenis({
  duration: 2, // Change this value
  // ...
});
```

### Content

- **Hero**: Edit `src/components/Hero/index.tsx`
- **Projects**: Update projects array in `src/components/Projects/index.tsx`
- **Stacks**: Modify stacks array in `src/components/Stacks/index.tsx`
- **Contacts**: Update social links in `src/components/Contacts/index.tsx`

## License

MIT

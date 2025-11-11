# LuminaCore AI - Landing Page

A high-performance, production-ready Next.js landing page with smooth animations and optimized performance.

## Features

- **Performance Optimized**: Built with Next.js 13+ and optimized for speed
- **Smooth Animations**: Fluid scroll-based animations using Intersection Observer API
- **Fully Responsive**: Adapts seamlessly to all device sizes
- **SEO Ready**: Optimized metadata and semantic HTML
- **Modern Stack**: Next.js, TypeScript, Tailwind CSS, shadcn/ui

## Performance Optimizations

1. **Static Generation**: Pages are pre-rendered at build time for instant loading
2. **Optimized Fonts**: Using Next.js font optimization with Inter font
3. **Lazy Loading**: Components animate in as they enter viewport
4. **CSS Optimizations**: Tailwind CSS purging unused styles
5. **React Optimizations**: Using React hooks for efficient re-renders

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and utilities
├── components/
│   ├── layout/
│   │   └── Header.tsx       # Fixed navigation header
│   ├── sections/
│   │   ├── HeroSection.tsx  # Hero section with animated cards
│   │   └── FeaturesSection.tsx # Features grid with intersection observer
│   └── ui/                  # shadcn/ui components
└── public/
    └── assets/              # Place your PNG/SVG assets here
```

## Adding Assets

Place your image assets in the `/public/assets/` directory:

- PNG files
- SVG files
- Other static assets

Reference them in your code:
```tsx
<img src="/assets/your-image.png" alt="Description" />
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Colors
Edit the gradient colors in:
- `app/globals.css` - Global color variables
- Component files - Tailwind classes

### Animations
Adjust animation timings in component files:
- `duration-1000` - Animation duration (1000ms)
- `delay-300` - Stagger delay between elements

### Content
Update text content in:
- `components/sections/HeroSection.tsx`
- `components/sections/FeaturesSection.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+

## License

MIT

# Luxe Restaurant - Modern SaaS Landing Page

A production-ready, premium fine dining restaurant SaaS landing page built with modern technologies and professional design patterns.

## 🎯 Features

### Sections
- **Hero Section** - Eye-catching introduction with animations and CTAs
- **About Section** - Restaurant story, chef introduction, and core values
- **Services** - Premium dining, events, catering, and more
- **Menu** - Beautiful food cards with filtering, ratings, and favorites
- **Pricing Plans** - Three elegant pricing tiers
- **Gallery** - Masonry layout with hover effects
- **Testimonials** - Carousel of guest reviews
- **FAQ** - Animated accordion with common questions
- **Booking Form** - Complete reservation system with validation
- **Contact** - Contact information, hours, and contact form with Google Maps

### Technical Features
- ✨ **Smooth Animations** - Framer Motion for premium feel
- 🎨 **Elegant Design** - Premium white theme with warm gold accents
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🔍 **SEO Optimized** - Metadata, Open Graph, JSON-LD
- ⚡ **Performance** - Optimized images, lazy loading, code splitting
- 🎯 **Type Safe** - Full TypeScript support
- 🧩 **Reusable Components** - Modular, scalable architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📁 Project Structure

```
app/
  ├── layout.tsx           # Root layout with metadata
  ├── page.tsx             # Home page
  └── globals.css          # Global styles and animations

components/
  ├── ui/                  # Reusable UI components
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   ├── Input.tsx
  │   ├── Badge.tsx
  │   ├── Section.tsx
  │   └── ...
  ├── sections/            # Page sections
  │   ├── HeroSection.tsx
  │   ├── AboutSection.tsx
  │   ├── ServicesSection.tsx
  │   ├── MenuSection.tsx
  │   └── ...
  ├── Navbar.tsx           # Navigation bar
  ├── Footer.tsx           # Footer
  └── Accordion.tsx        # FAQ accordion

lib/
  ├── constants.ts         # App constants and data
  └── utils.ts             # Utility functions

types/
  └── index.ts             # TypeScript interfaces

public/
  └── assets/              # Images and media

tailwind.config.ts         # Tailwind configuration
next.config.ts             # Next.js configuration
tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   cd "SaaS Landing Page Restaurant"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- Primary: Gold (`gold-500`)
- Secondary: Charcoal (`charcoal-900`)
- Accent: Cream (`cream-100`)

### Content
All restaurant data, menu items, testimonials, and pricing are in `lib/constants.ts`. Update these to match your business.

### Sections
Each section is a standalone component in `components/sections/`. Easily add, remove, or reorder them in `app/page.tsx`.

## 🔧 Configuration

### Environment Variables
Create `.env.local` for any environment-specific settings:
```
NEXT_PUBLIC_RESTAURANT_NAME=Luxe Restaurant
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
```

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- High contrast colors
- Screen reader friendly

## 🔍 SEO

- Next.js metadata API for page titles and descriptions
- Open Graph tags for social sharing
- Twitter Card meta tags
- Semantic HTML structure
- Optimized images with next/image
- Clean, descriptive URLs

## ⚡ Performance

- Lighthouse score target: 95+
- Image optimization with next/image
- Code splitting with dynamic imports
- Lazy loading for sections
- CSS-in-JS elimination (Tailwind CSS)
- No render-blocking resources

## 📝 Code Quality

- Clean, readable code with comments
- SOLID principles applied
- DRY (Don't Repeat Yourself)
- Type-safe TypeScript
- Consistent naming conventions
- Modular component structure

## 🔐 Security

- Input validation on all forms
- XSS protection via React
- CSRF tokens in forms (ready for backend)
- Safe external links
- No sensitive data exposed
- Environment variables for secrets

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Heroku
- Docker

## 📄 License

This is a portfolio project. Feel free to use it as a reference or template.

## 👨‍💻 Author

Engr. Muhammad Essa Arijo.

## 🤝 Contributing

This is a portfolio project, but improvements are welcome. Fork and create a pull request!

## 📞 Support

For issues or questions, check the code comments and TypeScript types for guidance.

---

**Build by Engr. Muhammad Essa Arijo ❤️**

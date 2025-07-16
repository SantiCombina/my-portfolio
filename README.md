# Santiago Combina - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Payload CMS, showcasing my work as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works perfectly on all devices
- **Multilingual**: Support for English and Spanish with automatic browser language detection
- **CMS Integration**: Content managed through Payload CMS for easy updates
- **Performance Optimized**: Built with Next.js 15 App Router for optimal performance
- **Type Safe**: Full TypeScript implementation for better development experience
- **Dark Theme**: Beautiful dark theme with purple/pink gradient accents

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautifully designed components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling (planned)
- **Zod** - Schema validation (planned)

### Backend & CMS
- **Payload CMS** - Headless CMS for content management
- **PostgreSQL** - Database with NeonTech hosting

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PNPM** - Package manager

## 📱 Sections

- **Hero**: Introduction with animated elements
- **Projects**: Showcase of featured work and projects
- **Skills**: Technical skills with interactive cards
- **Contact**: Contact form and social media links
- **Footer**: Additional information and navigation

## 🎨 Design Features

- **Smooth Animations**: Framer Motion powered animations
- **Interactive Elements**: Hover effects and micro-interactions
- **Mobile Menu**: Hamburger menu with smooth transitions
- **Gradient Accents**: Purple to pink gradients throughout
- **Glassmorphism**: Modern glass effect cards and components

## 🌐 Live Demo

- **Portfolio**: [https://santicombina.dev](https://santicombina.vercel.app/)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- PNPM (recommended) or npm
- PostgreSQL instance (NeonTech recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/santicombina/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your environment variables:
   ```env
   PAYLOAD_SECRET=your-secret-key
   DATABASE_URI=your-postgresql-connection-string
   UPLOADTHING_TOKEN=your-uploadthing-token
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

### Admin Panel

Access the CMS admin panel at `http://localhost:3000/admin` to manage content.

## 📁 Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Main portfolio pages
│   └── (payload)/           # CMS admin routes
├── collections/             # Payload CMS collections
├── components/
│   ├── sections/           # Page sections
│   ├── ui/                 # Reusable UI components
│   └── skeletons/          # Loading components
├── contexts/               # React contexts
├── hooks/                  # Custom hooks
├── lib/                    # Utilities and translations
├── styles/                 # Global styles
└── types/                  # TypeScript types
```

## 🌍 Internationalization

The portfolio supports both English and Spanish:

- Automatic browser language detection
- Manual language switching
- Persistent language preference in localStorage
- Complete translations for all content

## 📱 Responsive Design

- **Mobile First**: Designed with mobile users in mind
- **Breakpoints**: Optimized for all screen sizes
- **Touch Friendly**: Large touch targets for mobile navigation
- **Performance**: Optimized images and lazy loading

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## 📦 Media Storage: Uploadthing

Este proyecto utiliza [Uploadthing](https://uploadthing.com/) como solución de almacenamiento para archivos multimedia en Payload CMS.

## 📞 Contact

**Santiago Combina**
- Email: santicombina@gmail.com
- LinkedIn: [Santiago Combina](https://linkedin.com/in/santiago-combina)
- GitHub: [@santicombina](https://github.com/santicombina)

---

⭐ If you found this project interesting, please consider giving it a star!

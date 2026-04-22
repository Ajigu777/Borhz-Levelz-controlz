# BORHZ LEVEL CONTROLZ (BLC) Gaming Website

A premium gaming brand website featuring immersive 3D experiences, responsive design, and modern React architecture. Built for gamers who demand elite performance and cutting-edge aesthetics.

![Live Demo](https://your-demo-url.com) *(Replace with actual deployment URL)*

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Modern component-based UI framework |
| **Vite** | Fast build tool and development server |
| **Tailwind CSS** | Utility-first CSS framework with custom theming |
| **Three.js** | 3D graphics and interactive hero section |
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Useful helpers for React Three Fiber |
| **Framer Motion** | Animation library for smooth transitions |
| **React Router** | Client-side routing for SPA navigation |

## 📁 Project Structure

```
blc-gaming/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # 3D Three.js hero section
│   │   ├── ServicesSection.jsx   # Service offerings grid
│   │   ├── ExperienceSection.jsx # Premium features with orbital animation
│   │   ├── EventsSection.jsx     # Event types showcase
│   │   ├── ShopSection.jsx       # Product catalog
│   │   ├── GalleryPreview.jsx    # Gallery thumbnails
│   │   ├── CTASection.jsx        # Call-to-action banner
│   │   ├── CyberDivider.jsx      # Animated section dividers
│   │   ├── LoadingScreen.jsx     # Initial loading animation
│   │   ├── LazyImage.jsx         # Optimized image loading
│   │   ├── Layout.jsx            # Site layout wrapper
│   │   ├── Navbar.jsx            # Navigation component
│   │   └── Footer.jsx            # Site footer
│   ├── pages/
│   │   ├── HomePage.jsx          # Main landing page
│   │   ├── GalleryPage.jsx       # Full gallery view
│   │   ├── GalleryDetailPage.jsx # Individual gallery items
│   │   ├── ServicesPage.jsx      # Services detail page
│   │   ├── EventsPage.jsx        # Events information
│   │   ├── ContactPage.jsx       # Contact form
│   └── ShopPage.jsx              # Shop catalog
│   ├── hooks/
│   │   └── useScrollReveal.js    # Scroll animation hook
│   ├── constants/
│   │   ├── colors.js             # Brand color definitions
│   └── routes.js                 # Route constants
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles and utilities
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🎨 Color System

BLC's brand colors are defined in `src/constants/colors.js` and integrated into Tailwind CSS:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **BLC Black** | `#0D0D0D` | Primary background |
| **BLC Slate** | `#1A1A1A` | Secondary backgrounds, cards |
| **BLC Cyan** | `#00BFFF` | Primary accent, highlights |
| **BLC Pink** | `#FF1493` | Secondary accent, CTAs |
| **BLC Text** | `#FFFFFF` | Primary text color |

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/blc-gaming.git
   cd blc-gaming
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)
3. Configure redirects for SPA routing

### Manual Deployment
- Upload the `dist` folder contents to any static hosting service
- Ensure proper MIME types for `.js` and `.css` files

## 🎯 Features

- **Immersive 3D Hero**: Interactive Three.js scene with gaming elements
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Smooth Animations**: Framer Motion powered transitions and scroll effects
- **Lazy Loading**: Optimized image loading for better performance
- **SEO Ready**: Meta tags and semantic HTML structure
- **Performance Optimized**: Code splitting and chunk optimization
- **Accessibility**: Keyboard navigation and screen reader support

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

BORHZ LEVEL CONTROLZ
- Website: [your-website.com](https://your-website.com)
- Email: contact@blc-gaming.com
- Discord: [Join our community](https://discord.gg/blc)

---

*Built with ❤️ for the gaming community*

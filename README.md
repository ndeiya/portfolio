# Web Developer Portfolio

A modern, responsive web developer portfolio website built with React, Tailwind CSS, and shadcn/ui components.

## 🌟 Features

- **Modern Design**: Dark theme with professional styling
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Single-Page Application**: Smooth scrolling navigation
- **Interactive Elements**: Hover effects and animations
- **Professional Sections**: Hero, About, Skills, Projects, and Contact

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd web-dev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
web-dev-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── hero-bg.png
│   │   ├── project-1.png
│   │   ├── project-2.png
│   │   └── project-3.png
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       └── badge.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Beautiful icon library

## 🎨 Customization

### Colors and Theme
The portfolio uses a dark theme with custom CSS variables. You can modify the colors in `src/App.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... other variables */
}
```

### Content
Update the content in `src/App.jsx`:
- Personal information in the Hero and About sections
- Skills and their proficiency levels
- Project details and images
- Contact information

### Images
Replace the images in `src/assets/` with your own:
- `hero-bg.png`: Hero section background
- `project-1.png`, `project-2.png`, `project-3.png`: Project mockups

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Flexible grid layouts
- Optimized typography scaling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Any static hosting**: Upload the `dist` folder

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Lint code with ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using React, Tailwind CSS, and shadcn/ui** 
# 🚀 Kotari Chaitanya Krishna — AI/ML Portfolio

A modern, professional, and animation-rich portfolio website built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0055)

## 🌐 Live Demo

**[https://Chaitanya8822.github.io/Portfolio](https://Chaitanya8822.github.io/Portfolio)**

---

## ✨ Features

- 🌑 **Dark glassmorphism UI** with glowing effects
- 🎇 **Particle background** (tsParticles)
- ⌨️ **Typing animation** — AI/ML Engineer | Deep Learning Enthusiast | NLP Practitioner
- 🎬 **Framer Motion** scroll-based animations
- 📊 **Animated skill progress bars**
- 📱 **Fully responsive** (mobile + desktop)
- 📬 **Contact form** with EmailJS integration and validation
- 📜 **Scroll progress indicator**
- ⏳ **Loading animation**
- 🌟 **Smooth hover glow effects**

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations & transitions |
| tsParticles | Particle background |
| react-type-animation | Typing effect |
| EmailJS | Contact form |
| react-icons | Icon library |
| react-scroll | Smooth scroll navigation |
| gh-pages | GitHub Pages deployment |

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx          # Loading screen
│   │   ├── ParticleBackground.jsx  # Particle animation
│   │   ├── ScrollProgress.jsx  # Scroll progress bar
│   │   ├── Navbar.jsx          # Navigation
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills with progress bars
│   │   ├── Projects.jsx        # Projects (placeholders)
│   │   ├── Certifications.jsx  # Certifications (placeholders)
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Chaitanya8822/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an **Email Service** and note the **Service ID**
3. Create an **Email Template** and note the **Template ID**
4. Copy your **Public Key** from Account settings
5. Update `src/components/Contact.jsx`:

```js
await emailjs.sendForm(
  'YOUR_SERVICE_ID',   // ← Replace
  'YOUR_TEMPLATE_ID',  // ← Replace
  formRef.current,
  'YOUR_PUBLIC_KEY'    // ← Replace
)
```

## 🚀 Deployment to GitHub Pages

```bash
# Install gh-pages (already in devDependencies)
npm install

# Build and deploy
npm run deploy
```

Or manually:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Chaitanya8822/Portfolio.git
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

Then go to **Settings → Pages → Source: gh-pages branch** on your GitHub repository.

## 👤 About

**Kotari Chaitanya Krishna**
- 📧 [chaitanyakrishnakotari@gmail.com](mailto:chaitanyakrishnakotari@gmail.com)
- 📱 +91 8179308822
- 💼 [LinkedIn](http://www.linkedin.com/in/kotari-chaitanyakrishna-317229270)
- 🐙 [GitHub](https://github.com/Chaitanya8822)

---

Made with ❤️ by Chaitanya Krishna
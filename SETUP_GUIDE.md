# Portfolio Website - Setup Guide

## 🚀 Quick Start

Website portfolio Anda sudah siap! Berikut adalah ringkasan lengkap.

---

## 📋 Langkah Instalasi Tailwind CSS

### 1. Install Dependencies
```bash
npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
```

### 2. File Konfigurasi yang Sudah Dibuat

#### [tailwind.config.js](file:///d:/PROJECT/personal-website/tailwind.config.js)
Konfigurasi Tailwind dengan custom animations (fade-in, slide-up).

#### [postcss.config.js](file:///d:/PROJECT/personal-website/postcss.config.js)
Konfigurasi PostCSS untuk Tailwind dan Autoprefixer.

#### [src/index.css](file:///d:/PROJECT/personal-website/src/index.css)
Global styles dengan:
- Tailwind directives (`@tailwind base/components/utilities`)
- Smooth scroll behavior
- Custom scrollbar
- Custom animations

---

## 📁 Struktur Folder Final

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              ← Fixed navbar dengan mobile menu
│   │   └── sections/
│   │       ├── Home.jsx            ← Hero section
│   │       ├── About.jsx           ← About dengan stats
│   │       ├── Skills.jsx          ← Skills dengan progress bars
│   │       ├── Projects.jsx        ← Project cards
│   │       └── Contact.jsx         ← Contact form + footer
│   ├── App.jsx                     ← Main app (semua sections)
│   ├── main.jsx
│   └── index.css                   ← Global styles
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Komponen Overview

### 1. **Navbar.jsx**
- Fixed navbar dengan backdrop blur
- Mobile hamburger menu
- Smooth scroll navigation
- Gradient logo

### 2. **Home.jsx** (Section #home)
- Hero dengan gradient background
- Animated heading text
- 2 CTA buttons

### 3. **About.jsx** (Section #about)
- Avatar placeholder
- Description text
- Stats grid (4 cards)

### 4. **Skills.jsx** (Section #skills)
- 3 kategori: Frontend, Backend, Tools
- Progress bars dengan percentage
- Technology tags

### 5. **Projects.jsx** (Section #projects)
- 6 project cards
- Tech stack tags
- Demo & Source buttons

### 6. **Contact.jsx** (Section #contact)
- Contact form (name, email, message)
- Contact info cards
- Social media links
- Footer

---

## ✨ Features

✅ **Smooth Scrolling** - CSS smooth scroll + anchor links  
✅ **Responsive Design** - Mobile → Tablet → Desktop  
✅ **Animations** - Fade-in, hover effects, scale transforms  
✅ **Modern Design** - Dark theme, gradients, glassmorphism  
✅ **Clean Code** - Reusable components, Tailwind utility classes  

---

## 🎯 Cara Customize

### Update Konten Pribadi

**Home Section** - Edit [Home.jsx:L7-L9](file:///d:/PROJECT/personal-website/src/components/sections/Home.jsx#L7-L9)
```jsx
<span>Hi, I'm Your Name</span>  // ← Ganti dengan nama Anda
<p>Full Stack Developer & Creative Problem Solver</p>  // ← Ganti title
```

**About Section** - Edit [About.jsx:L23-L28](file:///d:/PROJECT/personal-website/src/components/sections/About.jsx#L23-L28)
```jsx
<p>Hello! I'm a passionate developer...</p>  // ← Ganti deskripsi
```

**Skills Section** - Edit [Skills.jsx:L3-L26](file:///d:/PROJECT/personal-website/src/components/sections/Skills.jsx#L3-L26)
```jsx
const skillCategories = [...]  // ← Tambah/edit skills
```

**Projects Section** - Edit [Projects.jsx:L3-L44](file:///d:/PROJECT/personal-website/src/components/sections/Projects.jsx#L3-L44)
```jsx
const projects = [...]  // ← Tambah/edit projects
```

**Contact Section** - Edit [Contact.jsx:L21-L24](file:///d:/PROJECT/personal-website/src/components/sections/Contact.jsx#L21-L24)
```jsx
const socialLinks = [...]  // ← Update social media links
```

### Ganti Warna Theme

Edit [tailwind.config.js](file:///d:/PROJECT/personal-website/tailwind.config.js) untuk custom colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

---

## 🚀 Run Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

---

## 📦 Build untuk Production

```bash
npm run build
```

Output akan ada di folder `dist/`

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## 📝 Notes

- **Tailwind CSS Version**: v3.4.0 (stable)
- **Lint Warnings**: `@tailwind` dan `@apply` warnings adalah normal, tidak mempengaruhi functionality
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Tested**: ✅ Responsive di semua screen sizes

---

## 🎉 Done!

Website portfolio Anda sudah siap digunakan. Tinggal customize content sesuai kebutuhan dan deploy! 

Untuk pertanyaan atau issue, silakan check dokumentasi:
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)

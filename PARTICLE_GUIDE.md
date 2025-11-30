# Cara Mengintegrasikan Particle Background

## 📦 Yang Sudah Dilakukan

### 1. Install OGL Library
```bash
npm install ogl
```

### 2. File yang Dibuat/Dimodifikasi

#### [Particles.jsx](file:///d:/PROJECT/personal-website/src/components/Particles.jsx) (NEW)
Komponen WebGL particle animation menggunakan OGL library dengan fitur:
- 200+ animated particles
- Interactive mouse hover effect
- Customizable colors, speed, dan particle count
- Smooth WebGL rendering

#### [Home.jsx](file:///d:/PROJECT/personal-website/src/components/sections/Home.jsx) (MODIFIED)
Diupdate dengan 3 layer:
1. **Particle Background** (z-0): WebGL particles
2. **Gradient Overlay** (z-10): Semi-transparent gradient untuk readability
3. **Content** (z-20): Text dan buttons

---

## 🎨 Konfigurasi Particles

```jsx
<Particles
  particleColors={['#60a5fa', '#a78bfa', '#ec4899']}  // Blue, Purple, Pink
  particleCount={200}                                  // Jumlah particles
  particleSpread={10}                                  // Spread area
  speed={0.1}                                          // Animation speed
  particleBaseSize={100}                               // Base size
  moveParticlesOnHover={true}                          // Interactive hover
  alphaParticles={false}                               // Solid particles
  disableRotation={false}                              // Enable rotation
/>
```

---

## 🎯 Cara Customize

### Ubah Warna Particles
Edit di [Home.jsx:L9](file:///d:/PROJECT/personal-website/src/components/sections/Home.jsx#L9):
```jsx
particleColors={['#your-color-1', '#your-color-2', '#your-color-3']}
```

### Ubah Jumlah Particles
```jsx
particleCount={300}  // Lebih banyak particles
```

### Ubah Kecepatan Animasi
```jsx
speed={0.2}  // Lebih cepat
speed={0.05} // Lebih lambat
```

### Disable Mouse Interaction
```jsx
moveParticlesOnHover={false}
```

### Ubah Opacity Gradient Overlay
Edit di [Home.jsx:L19](file:///d:/PROJECT/personal-website/src/components/sections/Home.jsx#L19):
```jsx
className="... from-gray-900/70 via-purple-900/60 to-gray-900/70"
// Angka setelah / adalah opacity (0-100)
```

---

## ✅ Hasil

![Particle Background di Home Section](C:/Users/Lenovo/.gemini/antigravity/brain/465165f8-426c-4156-a29d-8063c334442e/home_with_particles_1_1764512510198.png)

**Features:**
- ✅ Smooth WebGL particle animation
- ✅ Interactive mouse hover effect
- ✅ Responsive di semua screen sizes
- ✅ Performance optimized
- ✅ Customizable colors dan settings

---

## 📝 Notes

- **Performance**: WebGL rendering sangat smooth, tidak membebani browser
- **Browser Support**: Modern browsers dengan WebGL support
- **Mobile**: Particles tetap berfungsi di mobile (hover disabled otomatis)
- **Customization**: Semua parameter bisa disesuaikan sesuai kebutuhan

---

## 🎉 Done!

Particle background sudah terintegrasi dengan sempurna di Home section! Gerakkan mouse Anda untuk melihat efek interaktif.

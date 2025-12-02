# Panduan Lengkap GSAP Scroll Animations

Dokumentasi lengkap tentang implementasi animasi scroll menggunakan GSAP (GreenSock Animation Platform) di portfolio website Anda.

## 📚 Daftar Isi

1. [Apa itu GSAP?](#apa-itu-gsap)
2. [Instalasi](#instalasi)
3. [Struktur File](#struktur-file)
4. [Penjelasan Komponen](#penjelasan-komponen)
5. [Cara Menggunakan](#cara-menggunakan)
6. [Contoh Implementasi](#contoh-implementasi)
7. [Kustomisasi Animasi](#kustomisasi-animasi)
8. [Tips & Best Practices](#tips--best-practices)

---

## Apa itu GSAP?

**GSAP (GreenSock Animation Platform)** adalah library animasi JavaScript yang sangat powerful dan performant. GSAP digunakan oleh perusahaan-perusahaan besar seperti Google, Nike, dan Adobe.

### Keunggulan GSAP:

- ⚡ **Performa Tinggi** - Animasi yang smooth bahkan di device low-end
- 🎯 **Mudah Digunakan** - API yang intuitif dan mudah dipelajari
- 🔧 **Fleksibel** - Bisa menganimasikan hampir semua properti CSS dan JavaScript
- 📱 **Cross-browser** - Bekerja konsisten di semua browser modern
- 🎨 **ScrollTrigger** - Plugin untuk membuat scroll-based animations

---

## Instalasi

GSAP sudah terinstall di project Anda. Jika Anda memulai project baru, install dengan:

```bash
npm install gsap
```

---

## Struktur File

Berikut adalah file-file yang telah dibuat untuk GSAP:

```
src/
├── hooks/
│   └── useGSAP.js              # Custom React hook untuk GSAP
├── utils/
│   └── scrollAnimations.js     # Utility functions untuk animasi
└── components/
    └── sections/
        ├── Home.jsx            # Menggunakan GSAP animations
        ├── About.jsx           # Menggunakan GSAP animations
        ├── Skills.jsx          # Menggunakan GSAP animations
        └── Projects.jsx        # Menggunakan GSAP animations
```

---

## Penjelasan Komponen

### 1. useGSAP Hook (`src/hooks/useGSAP.js`)

Custom React hook yang mengintegrasikan GSAP dengan React lifecycle.

**Fungsi Utama:**
- ✅ Menjalankan animasi setelah component mount
- ✅ Membersihkan animasi saat component unmount (mencegah memory leaks)
- ✅ Menyediakan GSAP context yang aman

**Cara Menggunakan:**

```jsx
import { useGSAP } from '../../hooks/useGSAP';

const MyComponent = () => {
  const elementRef = useRef(null);

  useGSAP(() => {
    // Tulis animasi GSAP di sini
    gsap.from(elementRef.current, {
      opacity: 0,
      duration: 1
    });
  }, []); // Dependency array seperti useEffect

  return <div ref={elementRef}>Hello</div>;
};
```

---

### 2. Scroll Animations Utility (`src/utils/scrollAnimations.js`)

File ini berisi 8 fungsi animasi yang siap pakai:

#### **fadeIn** - Element muncul dengan opacity 0 → 1

```jsx
fadeIn(target, {
  duration: 1,      // Durasi animasi (detik)
  delay: 0,         // Delay sebelum mulai (detik)
  start: "top 80%"  // Trigger point
});
```

**Kapan digunakan:** Untuk heading, text, atau element yang ingin muncul smooth.

---

#### **slideInLeft** - Element masuk dari kiri

```jsx
slideInLeft(target, {
  duration: 1,
  delay: 0,
  distance: 100,    // Jarak slide (px)
  start: "top 80%"
});
```

**Kapan digunakan:** Untuk images, cards, atau content di sisi kiri.

---

#### **slideInRight** - Element masuk dari kanan

```jsx
slideInRight(target, {
  duration: 1,
  delay: 0,
  distance: 100,
  start: "top 80%"
});
```

**Kapan digunakan:** Untuk content di sisi kanan, creating balance dengan slideInLeft.

---

#### **slideInBottom** - Element masuk dari bawah

```jsx
slideInBottom(target, {
  duration: 1,
  delay: 0,
  distance: 100,
  start: "top 80%"
});
```

**Kapan digunakan:** Untuk buttons, CTAs, atau element yang ingin emphasis.

---

#### **scaleIn** - Element muncul dengan scale kecil → normal

```jsx
scaleIn(target, {
  duration: 1,
  delay: 0,
  scale: 0.5,       // Ukuran awal (0.5 = 50%)
  start: "top 80%"
});
```

**Kapan digunakan:** Untuk icons, badges, atau element yang ingin pop effect.

---

#### **staggerFadeIn** - Multiple elements muncul berurutan

```jsx
staggerFadeIn(targets, {
  duration: 1,
  delay: 0,
  stagger: 0.2,     // Delay antar element
  direction: "bottom", // "bottom", "left", "right"
  start: "top 80%"
});
```

**Kapan digunakan:** Untuk lists, cards, atau group of elements.

---

#### **parallax** - Element bergerak dengan kecepatan berbeda saat scroll

```jsx
parallax(target, {
  speed: 0.5        // Kecepatan (0-1, semakin kecil semakin lambat)
});
```

**Kapan digunakan:** Untuk background images atau decorative elements.

---

#### **reveal** - Element terungkap dari atas ke bawah

```jsx
reveal(target, {
  duration: 1.5,
  delay: 0,
  start: "top 80%"
});
```

**Kapan digunakan:** Untuk images atau text blocks dengan dramatic effect.

---

## Cara Menggunakan

### Langkah-langkah Implementasi:

#### **Step 1: Import Dependencies**

```jsx
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { fadeIn, slideInLeft } from '../../utils/scrollAnimations';
```

#### **Step 2: Buat Refs untuk Target Elements**

```jsx
const MyComponent = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  
  // ... rest of component
};
```

#### **Step 3: Setup Animasi dengan useGSAP**

```jsx
useGSAP(() => {
  // Animasi heading
  fadeIn(headingRef.current, {
    duration: 1,
    start: "top 80%"
  });
  
  // Animasi image
  slideInLeft(imageRef.current, {
    duration: 1.2,
    delay: 0.2,
    start: "top 70%"
  });
}, []); // Empty array = run once on mount
```

#### **Step 4: Attach Refs ke Elements**

```jsx
return (
  <div>
    <h1 ref={headingRef}>My Heading</h1>
    <img ref={imageRef} src="..." alt="..." />
  </div>
);
```

---

## Contoh Implementasi

### Contoh 1: Simple Fade In

```jsx
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { fadeIn } from '../../utils/scrollAnimations';

const SimpleSection = () => {
  const titleRef = useRef(null);

  useGSAP(() => {
    fadeIn(titleRef.current, {
      duration: 1.5,
      start: "top 80%"
    });
  }, []);

  return (
    <section>
      <h2 ref={titleRef}>Welcome to My Site</h2>
    </section>
  );
};
```

---

### Contoh 2: Stagger Animation untuk Cards

```jsx
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { staggerFadeIn } from '../../utils/scrollAnimations';

const CardGrid = () => {
  const cardsRef = useRef(null);

  useGSAP(() => {
    // Animasi semua children dari cardsRef
    staggerFadeIn(cardsRef.current.children, {
      duration: 0.8,
      stagger: 0.15,  // 0.15s delay antar card
      direction: "bottom",
      start: "top 75%"
    });
  }, []);

  return (
    <div ref={cardsRef} className="grid grid-cols-3 gap-4">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </div>
  );
};
```

---

### Contoh 3: Split Content (Image Left, Text Right)

```jsx
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { slideInLeft, slideInRight } from '../../utils/scrollAnimations';

const SplitSection = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Image masuk dari kiri
    slideInLeft(imageRef.current, {
      duration: 1.2,
      distance: 100,
      start: "top 70%"
    });

    // Content masuk dari kanan
    slideInRight(contentRef.current, {
      duration: 1.2,
      distance: 100,
      start: "top 70%"
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div ref={imageRef}>
        <img src="..." alt="..." />
      </div>
      <div ref={contentRef}>
        <h2>About Me</h2>
        <p>Lorem ipsum...</p>
      </div>
    </div>
  );
};
```

---

## Kustomisasi Animasi

### Mengubah Trigger Point

Parameter `start` menentukan kapan animasi dimulai:

```jsx
fadeIn(element, {
  start: "top 80%"  // Animasi mulai saat top element mencapai 80% viewport
});
```

**Contoh trigger points:**
- `"top 90%"` - Animasi lebih cepat (element baru sedikit masuk viewport)
- `"top 50%"` - Animasi di tengah viewport
- `"top 20%"` - Animasi lebih lambat (element hampir di tengah)

---

### Mengubah Duration & Delay

```jsx
fadeIn(element, {
  duration: 2,    // Animasi lebih lambat (2 detik)
  delay: 0.5      // Tunggu 0.5 detik sebelum mulai
});
```

---

### Mengubah Easing

Easing sudah di-set di dalam utility functions, tapi Anda bisa custom:

```jsx
gsap.from(element, {
  opacity: 0,
  duration: 1,
  ease: "power3.out"  // Smooth deceleration
  // Opsi lain: "bounce", "elastic", "back.out(1.7)"
});
```

---

### Membuat Animasi Custom

Jika animasi yang ada tidak cukup, buat sendiri:

```jsx
useGSAP(() => {
  gsap.from(elementRef.current, {
    opacity: 0,
    y: 100,
    rotation: 45,
    scale: 0.5,
    duration: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: elementRef.current,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}, []);
```

---

## Tips & Best Practices

### ✅ DO's

1. **Gunakan refs untuk target elements**
   ```jsx
   const myRef = useRef(null);
   <div ref={myRef}>...</div>
   ```

2. **Selalu gunakan useGSAP hook untuk React components**
   - Memastikan cleanup otomatis
   - Mencegah memory leaks

3. **Gunakan stagger untuk multiple elements**
   - Lebih menarik daripada semua muncul bersamaan
   - Delay 0.1-0.2s antar element biasanya ideal

4. **Test di berbagai scroll speeds**
   - Pastikan animasi smooth di slow & fast scroll

5. **Gunakan start point yang konsisten**
   - `"top 80%"` untuk most cases
   - `"top 70%"` untuk animasi yang ingin lebih delayed

---

### ❌ DON'Ts

1. **Jangan terlalu banyak animasi**
   - Bisa membuat website terasa lambat
   - Focus pada key elements saja

2. **Jangan gunakan duration terlalu lama**
   - 0.8-1.5s biasanya cukup
   - > 2s bisa membuat user impatient

3. **Jangan lupa dependency array di useGSAP**
   ```jsx
   useGSAP(() => {
     // animations
   }, []); // ← Jangan lupa ini!
   ```

4. **Jangan animate terlalu banyak properties sekaligus**
   - Bisa impact performance
   - Stick to opacity, transform (x, y, scale)

---

## Troubleshooting

### Animasi tidak jalan?

1. **Check console untuk errors**
2. **Pastikan ref sudah di-attach ke element**
   ```jsx
   <div ref={myRef}>...</div>
   ```
3. **Pastikan element ada saat animasi run**
   - Gunakan `if (elementRef.current)` check

### Animasi jalan tapi tidak smooth?

1. **Reduce complexity** - Animate fewer properties
2. **Check duration** - Mungkin terlalu cepat/lambat
3. **Try different easing** - `"power3.out"` biasanya paling smooth

### Animasi trigger terlalu cepat/lambat?

Adjust `start` parameter:
```jsx
fadeIn(element, {
  start: "top 70%"  // Lebih lambat
  // atau
  start: "top 90%"  // Lebih cepat
});
```

---

## Resources

- [GSAP Official Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [CodePen GSAP Examples](https://codepen.io/GreenSock/)

---

## Kesimpulan

Anda sekarang memiliki:
- ✅ GSAP terinstall dan configured
- ✅ Custom `useGSAP` hook untuk React integration
- ✅ 8 reusable animation functions
- ✅ Animasi di semua sections (Home, About, Skills, Projects)
- ✅ Dokumentasi lengkap untuk reference

**Selamat berkreasi dengan GSAP! 🎉**

Jika ada pertanyaan atau butuh bantuan lebih lanjut, jangan ragu untuk bertanya!

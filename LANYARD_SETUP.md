# Setup Lanyard Component - Instruksi Lengkap

## ✅ Yang Sudah Dilakukan:

1. ✅ Component `Lanyard.jsx` sudah dibuat di `src/components/`
2. ✅ About.jsx sudah diupdate untuk menggunakan Lanyard
3. ✅ vite.config.js sudah ditambahkan `assetsInclude: ['**/*.glb']`
4. ✅ Dependencies sudah terinstall (three, @react-three/fiber, dll)
5. ✅ Folder `src/assets/lanyard/` sudah dibuat

## 🔴 Yang Perlu Anda Lakukan:

### 1. Download File GLB dan Texture

Anda perlu 2 file di folder `src/assets/lanyard/`:

**a. card.glb** - File 3D model card

- Download dari: https://github.com/react-bits/lanyard-js-tw/tree/main/src/assets/lanyard
- Atau buat sendiri dengan Blender/online editor
- Simpan di: `src/assets/lanyard/card.glb`

**b. lanyard.png** - Texture untuk tali lanyard

- Download dari repo yang sama
- Atau buat sendiri (gambar horizontal dengan pattern)
- Simpan di: `src/assets/lanyard/lanyard.png`

### 2. Cara Menambahkan Foto Anda ke Card

**Opsi A: Edit di Online GLB Editor (Paling Mudah)**

1. Buka https://modelviewer.dev/editor/
2. Upload file `card.glb` Anda
3. Pilih material/texture di card
4. Upload foto Anda (Profile.jpg)
5. Adjust posisi dan scale foto
6. Download GLB yang sudah diedit
7. Replace file `card.glb` di `src/assets/lanyard/`

**Opsi B: Edit dengan Blender**

1. Install Blender (gratis)
2. Import card.glb
3. UV unwrap dan apply foto Anda sebagai texture
4. Export kembali sebagai GLB
5. Save ke `src/assets/lanyard/card.glb`

### 3. Struktur File yang Harus Ada:

```
src/
├── assets/
│   └── lanyard/
│       ├── card.glb          ← File 3D model dengan foto Anda
│       └── lanyard.png       ← Texture tali lanyard
├── components/
│   ├── Lanyard.jsx          ✅ Sudah ada
│   └── sections/
│       └── About.jsx        ✅ Sudah diupdate
└── ...
```

## 🎨 Customization

### Mengubah Posisi/Size Lanyard di About.jsx:

```jsx
<Lanyard
  position={[0, 0, 20]} // x, y, z position
  gravity={[0, -40, 0]} // gravity strength
  fov={25} // field of view (zoom level)
/>
```

### Mengubah Warna Tali Lanyard:

Di `Lanyard.jsx`, cari:

```jsx
<meshLineMaterial
  color="white"  // ← Ganti dengan warna lain: "blue", "#3b82f6", dll
  ...
/>
```

## 🐛 Troubleshooting

**Error: Cannot find module './card.glb'**
→ File card.glb belum ada di `src/assets/lanyard/`

**Error: Cannot find module 'meshline'**
→ Jalankan: `npm install meshline`

**Lanyard tidak muncul/blank**
→ Check browser console untuk error
→ Pastikan file GLB valid dan tidak corrupt

**Card tidak bisa di-drag**
→ Normal behavior, coba klik dan drag pada card area

## 📝 Notes:

- Lanyard akan interaktif (bisa di-drag dengan mouse)
- Physics simulation membuat card bergoyang realistis
- Responsive untuk mobile dan desktop
- Card akan mengikuti cursor saat di-drag

## 🔗 Resources:

- React Three Fiber docs: https://docs.pmnd.rs/react-three-fiber
- GLB Editor: https://modelviewer.dev/editor/
- Blender (free): https://www.blender.org/
- Example Lanyard repo: https://github.com/react-bits/lanyard-js-tw

---

Setelah file GLB dan PNG ditambahkan, lanyard akan otomatis muncul di About section menggantikan foto bulat!

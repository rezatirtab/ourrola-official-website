# OURROLA — Next.js Website

Website resmi OURROLA, dibangun dengan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS v4**, mengikuti *OURROLA Design System* & *UI/UX Blueprint*.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build production:

```bash
npm run build
npm run start
```

## Struktur Folder

```
src/
├── app/                # Routing: home, products, about, contact
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── product/         # ProductCard
│   └── ui/               # Button, Badge, Container, SectionTitle, FAQItem, CTABanner
├── data/                 # Semua konten (brand, navigation, products, gallery, ingredients, faq, social)
├── sections/home/        # Section-section khusus homepage
├── types/                 # Type definitions
└── utils/                 # Helper functions (format harga, dll)

public/images/             # Semua aset gambar & video
```

## Yang Perlu Kamu Ganti (Placeholder)

1. **Data produk** → `src/data/products.ts` (nama, shade, harga, deskripsi, gambar)
2. **Link marketplace & WhatsApp** → `src/data/brand.ts` dan `src/data/social.ts`
3. **Gambar produk/gallery** → ganti file di `public/images/products` dan `public/images/gallery` (nama file bisa sama agar tidak perlu ubah kode)
4. **Konten About** (story, mission, vision) → `src/app/about/page.tsx`
5. **FAQ** → `src/data/faq.ts`

## Design System (ringkas)

| Token | Value |
|---|---|
| Primary (Gold) | `#BFA181` |
| Secondary (Beige) | `#DCC5B2` |
| Accent (Brown) | `#8C5E3C` |
| Surface | `#FAF7F4` |
| Border | `#ECECEC` |
| Text Primary | `#2B2B2B` |
| Text Secondary | `#666666` |

Semua token warna & radius didefinisikan di `src/app/globals.css` sebagai CSS variable + Tailwind `@theme`, jadi bisa dipakai lewat class seperti `bg-primary`, `text-accent`, `rounded-xl`, dll.

Font: **Playfair Display** (heading, editorial/elegant) + **Inter** (body). Font di-load lewat `next/font/google` di `src/app/layout.tsx` — butuh koneksi internet saat build/dev pertama kali.

## Catatan

- Belum ada cart/checkout — tombol "Buy Now" mengarah langsung ke link marketplace (Shopee/Tokopedia) yang bisa diganti di `src/data/brand.ts`.
- Ikon menggunakan `lucide-react` (outline, 2px sesuai blueprint), kecuali ikon Instagram yang dibuat custom karena versi lucide terbaru tidak lagi menyertakan ikon brand pihak ketiga.

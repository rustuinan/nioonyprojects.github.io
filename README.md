# Nioony Projects Website

Nioony Projects için hazırlanmış modern, responsive ve statik export alabilen Next.js web sitesi. Site; mobil oyunlar, mobil uygulamalar, deneysel dijital ürünler ve Google Play için herkese açık Privacy Policy sayfası sunar.

## Teknoloji

- Next.js App Router
- React
- Tailwind CSS
- React Three Fiber / Three.js
- Framer Motion
- Static export uyumlu GitHub Pages deploy workflow

## Dosyalar

- `app/page.tsx`: Ana sayfa.
- `app/privacy-policy/page.tsx`: Privacy Policy sayfası.
- `components/`: Header, Footer, Hero, 3D sahne ve section bileşenleri.
- `data/content.ts`: TR / EN metin dictionary yapısı.
- `public/CNAME`: GitHub Pages custom domain ayarı (`nioonyprojects.com`).

## Yayın Bilgileri

- Site domaini: `https://nioonyprojects.com`
- Privacy Policy URL: `https://nioonyprojects.com/privacy-policy.html`
- Geliştirici iletişim e-postası: `contact@nioonyprojects.com`

Google Play için gizlilik politikası URL'si public, aktif, tarayıcıda açılabilen ve PDF olmayan bir web sayfası olmalıdır. Bu repodaki `privacy-policy.html` sayfası bu amaçla yayınlanabilir.

## Lokal Önizleme

Bağımlılıkları kurun:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

## GitHub Pages Deploy

1. Repo `Settings > Pages` bölümünde source olarak `GitHub Actions` seçin.
2. Değişiklikleri `main` branch'ine push edin.
3. `.github/workflows/deploy.yml` workflow'u Next.js static export üretip GitHub Pages'e yayınlar.
4. Custom domain alanının `nioonyprojects.com` olduğundan emin olun.
5. DNS kontrolü başarılı olduktan sonra `Enforce HTTPS` seçeneğini açın.

## Vercel Deploy

1. Vercel hesabınızla giriş yapın.
2. `Add New Project` ile GitHub reponuzu içe aktarın.
3. Framework Preset için `Other` veya otomatik statik algılamayı kullanın.
4. Build command alanını boş bırakın.
5. Output directory alanını boş bırakın veya proje kökü olarak bırakın.
6. `Deploy` butonuna basın.
7. Custom domain olarak `nioonyprojects.com` ekleyin.

## Dil Desteği

Site Türkçe ve İngilizce içerir. Dil seçimi sayfanın üst kısmındaki `TR` / `EN` düğmeleriyle yapılır ve tarayıcıda `localStorage` ile hatırlanır.

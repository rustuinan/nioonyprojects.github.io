# Nioony Projects Website

Nioony Projects için hazırlanmış sade, hızlı ve statik web sitesi. Site mobil oyunlar, mobil uygulamalar, küçük dijital ürünler ve Google Play için herkese açık Privacy Policy sayfası sunmak üzere plain HTML, CSS, küçük bir inline JavaScript ve Three.js tabanlı hero sahnesiyle oluşturulmuştur.

## Dosyalar

- `index.html`: Türkçe/İngilizce ana sayfa, proje kategorileri, hakkımızda ve iletişim alanı.
- `privacy-policy.html`: Google Play için kullanılabilir gizlilik politikası sayfası.
- `styles.css`: Mobil uyumlu, bağımlılıksız site stilleri.
- `CNAME`: GitHub Pages custom domain ayarı (`nioonyprojects.com`).

Three.js CDN üzerinden sabit sürümle yüklenir; projede npm kurulumu veya build adımı gerekmez.

## Yayın Bilgileri

- Site domaini: `https://nioonyprojects.com`
- Privacy Policy URL: `https://nioonyprojects.com/privacy-policy.html`
- Geliştirici iletişim e-postası: `contact@nioonyprojects.com`

Google Play için gizlilik politikası URL'si public, aktif, tarayıcıda açılabilen ve PDF olmayan bir web sayfası olmalıdır. Bu repodaki `privacy-policy.html` sayfası bu amaçla yayınlanabilir.

## Lokal Önizleme

Bu site statik olduğu için doğrudan `index.html` dosyasını tarayıcıda açabilirsiniz. Lokal sunucu ile kontrol etmek için:

```bash
python3 -m http.server 8000
```

Sonra şu adresleri açın:

- `http://localhost:8000/`
- `http://localhost:8000/privacy-policy.html`

## GitHub Pages Deploy

1. Değişiklikleri `main` branch'ine push edin.
2. GitHub repo sayfasında `Settings` bölümüne girin.
3. `Pages` menüsünü açın.
4. `Build and deployment` altında `Source` olarak `Deploy from a branch` seçin.
5. Branch olarak `main`, klasör olarak `/root` seçin.
6. Custom domain alanının `nioonyprojects.com` olduğundan emin olun.
7. DNS kontrolü başarılı olduktan sonra `Enforce HTTPS` seçeneğini açın.

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

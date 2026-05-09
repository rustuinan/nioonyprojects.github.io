# TODO Game Studio Website

Basit, hızlı ve statik mini game studio sitesi. Google Play için herkese açık bir Privacy Policy URL'si yayınlamak üzere plain HTML, CSS ve küçük bir inline JavaScript ile hazırlanmıştır.

## Dosyalar

- `index.html`: Türkçe/İngilizce ana sayfa, oyun listesi ve iletişim alanı.
- `privacy-policy.html`: Google Play için başlıklandırılmış gizlilik politikası şablonu.
- `styles.css`: Mobil uyumlu, sade ve profesyonel site stilleri.
- `README.md`: Kurulum, düzenleme ve deploy notları.

## Yayın Öncesi TODO Listesi

- `TODO Game Studio` adını gerçek stüdyo adıyla değiştirin.
- `TODO App Name` alanlarını gerçek uygulama adıyla değiştirin.
- `TODO@example.com` alanlarını Google Play Console'daki geliştirici iletişim e-postasıyla değiştirin.
- Privacy Policy içindeki veri toplama, reklam, analiz, crash reporting ve üçüncü taraf SDK alanlarını uygulamanızın gerçek davranışına göre doldurun.
- `Last updated` tarihini güncelleyin.
- Google Play Console'daki Data safety beyanları ile bu sayfadaki açıklamaların tutarlı olduğundan emin olun.

## Google Play Privacy Policy Notu

Google Play için gizlilik politikası URL'si public, aktif, tarayıcıda açılabilen ve PDF olmayan bir web sayfası olmalıdır. Bu repo içindeki `privacy-policy.html` dosyasını GitHub Pages, Vercel veya benzeri bir statik hosting servisiyle yayınlayıp oluşan URL'yi Google Play Console'a ekleyebilirsiniz.

## Lokal Önizleme

Bu site statik olduğu için doğrudan `index.html` dosyasını tarayıcıda açabilirsiniz. İsterseniz basit bir lokal sunucu da kullanabilirsiniz:

```bash
python3 -m http.server 8000
```

Sonra şu adresleri açın:

- `http://localhost:8000/`
- `http://localhost:8000/privacy-policy.html`

## GitHub Pages Deploy

1. Bu repoyu GitHub'a push edin.
2. GitHub repo sayfasında `Settings` bölümüne girin.
3. `Pages` menüsünü açın.
4. `Build and deployment` altında `Source` olarak `Deploy from a branch` seçin.
5. Branch olarak `main`, klasör olarak `/root` seçin ve kaydedin.
6. Yayın tamamlandığında GitHub Pages URL'niz oluşur.
7. Google Play Console'da Privacy Policy URL alanına şu formatta yayınlanan sayfayı girin:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/privacy-policy.html
```

## Vercel Deploy

1. Vercel hesabınızla giriş yapın.
2. `Add New Project` ile GitHub reponuzu içe aktarın.
3. Framework Preset için `Other` veya otomatik statik algılamayı kullanın.
4. Build command alanını boş bırakın.
5. Output directory alanını boş bırakın veya proje kökü olarak bırakın.
6. `Deploy` butonuna basın.
7. Yayınlanan alan adında Privacy Policy URL şu formatta olur:

```text
https://YOUR_PROJECT.vercel.app/privacy-policy.html
```

## Dil Desteği

Site Türkçe ve İngilizce içerir. Dil seçimi sayfanın üst kısmındaki `TR` / `EN` düğmeleriyle yapılır ve tarayıcıda `localStorage` ile hatırlanır.

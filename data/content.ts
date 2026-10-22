export type Language = 'tr' | 'en';

export const navItems = [
  { href: '/#home', key: 'home' },
  { href: '/#services', key: 'services' },
  { href: '/#projects', key: 'projects' },
  { href: '/#about', key: 'about' },
  { href: '/#contact', key: 'contact' },
  { href: '/privacy-policy/', key: 'privacy' }
] as const;

export const copy = {
  tr: {
    nav: {
      home: 'Ana sayfa',
      services: 'Hizmetler',
      projects: 'Oyunlarımız',
      about: 'Hakkımızda',
      contact: 'İletişim',
      privacy: 'Gizlilik'
    },
    hero: {
      eyebrow: 'Nioony Projects · Bağımsız oyun stüdyosu',
      title: 'Nioony Projects',
      description:
        'RingMatch ile renkleri eşleştir, Shikaku ile her kareyi çöz, Tet2048 ile bir sonraki hamleni planla. Kısa bir molayı keyifli bir bulmaca deneyimine dönüştüren mobil oyunlar geliştiriyoruz.',
      primary: 'Oyunlarımızı keşfet',
      secondary: 'Google Play’de bizi bul',
      scrollHint: 'Oyunları keşfet'
    },
    stats: [
      ['3', 'Oyun'],
      ['2', 'Google Play’de yayında'],
      ['1', 'İncelemede']
    ],
    projects: {
      eyebrow: 'Oyunlarımız',
      title: 'Her oyunda yeni bir hamle.',
      filters: ['Tümü', 'Oyunlar', 'Uygulamalar', 'Deneysel'],
      storeLabels: {
        play: 'Google Play bağlantısı',
        appStore: 'App Store bağlantısı'
      }
    },
    services: {
      eyebrow: 'Neler yapıyoruz',
      title: 'Bir hamleden fazlası.',
      cards: [
        ['Renk ve ritim', 'RingMatch’te halkaları yerleştir, aynı renkleri hizala ve eşleşmeler oluştur.'],
        ['Mantık ve keşif', 'Shikaku’da sayılardan yola çıkarak ızgarayı dikdörtgenlere ayır.'],
        ['Sayılar ve strateji', 'Tet2048’de blokları bırak, eşit sayıları birleştir ve daha büyük değerlere ulaş.']
      ]
    },
    about: {
      eyebrow: 'Hakkımızda',
      title: 'Oynaması kolay. Ustalaşması keyifli.',
      description:
        'Nioony Projects olarak renk, mantık ve sayı bulmacalarına odaklanıyoruz. RingMatch, Shikaku ve Tet2048’i anlaşılır kurallar, dikkatle tasarlanmış görseller ve tekrar oynamaya davet eden mekaniklerle geliştiriyoruz.',
      values: ['Anlaşılır oyun mekanikleri', 'Özenli görsel tasarım', 'Oyuncu geri bildirimleriyle gelişim']
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Bir fikrin, sorun ya da önerin mi var?',
      description: 'Oyunlarımızla ilgili geri bildirim, destek ve iş birliği taleplerini bize ilet. Yeni oyunlar ve güncellemeler için sosyal hesaplarımızı takip et.',
      emailLabel: 'E-posta',
      websiteLabel: 'Web sitesi'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      social: 'Bizi takip et'
    },
    privacy: {
      eyebrow: 'Gizlilik',
      title: 'Privacy Policy',
      intro:
        'Bu sayfa, Nioony Projects tarafından yayınlanan mobil oyunlar, uygulamalar ve küçük dijital ürünler için gizlilik uygulamalarını açıklar.',
      updated: 'Son güncelleme',
      appStudio: 'Uygulama / Stüdyo',
      email: 'Geliştirici e-postası',
      sections: [
        ['App/studio name', 'Bu gizlilik politikası, Nioony Projects tarafından Google Play, App Store ve diğer platformlarda yayınlanan mobil oyunlar, mobil uygulamalar ve dijital ürünler için geçerlidir.'],
        ['Developer contact email', 'Gizlilik, destek veya veri silme talepleri için contact@nioonyprojects.com adresinden bizimle iletişime geçebilirsiniz.'],
        ['Collected data', 'Toplanan veriler uygulamanın özelliklerine göre değişebilir. Bazı ürünler cihaz bilgileri, uygulama kullanım verileri, reklam kimliği, çökme raporları, performans bilgileri ve kullanıcı tarafından sağlanan destek mesajları gibi verileri işleyebilir.'],
        ['Third-party services / SDKs', 'Ürünlerimiz Google Play Services, Google AdMob, Firebase Analytics, Firebase Crashlytics ve benzeri üçüncü taraf servisleri kullanabilir. Bu servislerin veri işleme biçimleri kendi gizlilik politikalarına tabidir.'],
        ['Advertising / analytics / crash reporting', 'Reklam destekli uygulamalar kişiselleştirilmiş veya kişiselleştirilmemiş reklamlar gösterebilir. Analiz verileri ürünleri iyileştirmek, kullanım sorunlarını anlamak ve performansı takip etmek için kullanılabilir. Çökme raporları hataları düzeltmemize yardımcı olur.'],
        ['Children’s privacy', 'Nioony Projects çocukların gizliliğine önem verir. Çocuklara yönelik veya çocuklar tarafından kullanılabilecek uygulamalarda Google Play aile politikalarına ve geçerli yasal gerekliliklere uygun davranmayı hedefleriz.'],
        ['Data retention and deletion', 'Veriler, uygulamanın çalışması, güvenliği, analiz ihtiyaçları veya yasal gereklilikler için gerekli olduğu sürece saklanabilir. Veri silme talepleriniz için contact@nioonyprojects.com adresinden bize ulaşabilirsiniz.'],
        ['Security', 'Verileri korumak için makul teknik ve organizasyonel önlemler kullanırız. Bununla birlikte, internet üzerinden yapılan hiçbir aktarım veya elektronik depolama yöntemi tamamen risksiz değildir.'],
        ['Changes to this policy', 'Bu gizlilik politikası zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayınlanır ve değişiklikler için son güncelleme tarihi yenilenir.'],
        ['Contact', 'Bu politika veya Nioony Projects ürünleri hakkında sorularınız varsa contact@nioonyprojects.com adresinden iletişime geçebilirsiniz.']
      ]
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Our games',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy'
    },
    hero: {
      eyebrow: 'Nioony Projects · Independent game studio',
      title: 'Nioony Projects',
      description:
        'Match colors in RingMatch, solve every square in Shikaku, and plan your next move in Tet2048. We build mobile games that turn a short break into a satisfying puzzle.',
      primary: 'Explore our games',
      secondary: 'Find us on Google Play',
      scrollHint: 'Discover our games'
    },
    stats: [
      ['3', 'Games'],
      ['2', 'Available on Google Play'],
      ['1', 'Under review']
    ],
    projects: {
      eyebrow: 'Our games',
      title: 'A new move in every game.',
      filters: ['All', 'Games', 'Apps', 'Experimental'],
      storeLabels: {
        play: 'Google Play link',
        appStore: 'App Store link'
      }
    },
    services: {
      eyebrow: 'What we do',
      title: 'More than a single move.',
      cards: [
        ['Color and rhythm', 'Place rings, align matching colors, and create matches in RingMatch.'],
        ['Logic and discovery', 'Use the numbers to divide the grid into rectangles in Shikaku.'],
        ['Numbers and strategy', 'Drop blocks, merge equal numbers, and reach higher values in Tet2048.']
      ]
    },
    about: {
      eyebrow: 'About',
      title: 'Easy to learn. A pleasure to master.',
      description:
        'At Nioony Projects, we focus on color, logic, and number puzzles. We build RingMatch, Shikaku, and Tet2048 around clear rules, carefully crafted visuals, and mechanics that invite another round.',
      values: ['Clear game mechanics', 'Thoughtful visual design', 'Improvement through player feedback']
    },
    contact: {
      eyebrow: 'Contact',
      title: 'An idea, a question, or a suggestion?',
      description: 'Get in touch for game feedback, support, or collaborations. Follow our social channels for new games and updates.',
      emailLabel: 'Email',
      websiteLabel: 'Website'
    },
    footer: {
      rights: 'All rights reserved.',
      social: 'Follow us'
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Privacy Policy',
      intro:
        'This page explains the privacy practices for mobile games, apps, and small digital products published by Nioony Projects.',
      updated: 'Last updated',
      appStudio: 'App / Studio',
      email: 'Developer email',
      sections: [
        ['App/studio name', 'This privacy policy applies to mobile games, mobile apps, and digital products published by Nioony Projects on Google Play, the App Store, and other platforms.'],
        ['Developer contact email', 'For privacy, support, or data deletion requests, contact us at contact@nioonyprojects.com.'],
        ['Collected data', 'The data collected may vary depending on the product features. Some products may process device information, app usage data, advertising ID, crash reports, performance information, and support messages provided by users.'],
        ['Third-party services / SDKs', 'Our products may use third-party services such as Google Play Services, Google AdMob, Firebase Analytics, Firebase Crashlytics, and similar services. These services process data according to their own privacy policies.'],
        ['Advertising / analytics / crash reporting', 'Ad-supported apps may show personalized or non-personalized ads. Analytics data may be used to improve products, understand usage issues, and monitor performance. Crash reports help us fix errors.'],
        ['Children’s privacy', 'Nioony Projects cares about children’s privacy. For apps directed to or usable by children, we aim to follow Google Play Families policies and applicable legal requirements.'],
        ['Data retention and deletion', 'Data may be retained as long as needed for app operation, security, analytics, or legal requirements. You can contact us at contact@nioonyprojects.com for deletion requests.'],
        ['Security', 'We use reasonable technical and organizational measures to protect data. However, no method of internet transmission or electronic storage is completely risk-free.'],
        ['Changes to this policy', 'This privacy policy may be updated from time to time. The current version will be published on this page, and the last updated date will be revised when changes are made.'],
        ['Contact', 'If you have questions about this policy or Nioony Projects products, contact us at contact@nioonyprojects.com.']
      ]
    }
  }
} as const;

export const projects = [
  {
    name: 'RingMatch',
    category: 'games',
    categoryTr: 'Oyun',
    categoryEn: 'Game',
    descriptionTr: 'Halkaları yerleştir, aynı renkleri hizala ve neon bulmacanın ritmini yakala.',
    descriptionEn: 'Place rings, line up matching colors, and find your rhythm in a neon puzzle.',
    color: 'from-emerald-400 to-cyan-400',
    image: '/assets/ringmatch-banner.png',
    icon: '/assets/ringmatch-icon.jpg',
    playUrl: 'https://play.google.com/store/apps/details?id=com.nioonyprojects.ringmatch'
  },
  {
    name: 'Shikaku',
    category: 'games',
    categoryTr: 'Oyun',
    categoryEn: 'Game',
    descriptionTr: 'Sayıları ipucu olarak kullan, ızgarayı dikdörtgenlere ayır ve tropik bir mantık molası ver.',
    descriptionEn: 'Follow the number clues, divide the grid into rectangles, and take a tropical puzzle break.',
    color: 'from-teal-300 to-emerald-400',
    image: '/assets/shikaku-banner.png',
    icon: '/assets/shikaku-icon.png',
    playUrl: 'https://play.google.com/store/apps/details?id=com.nioonyprojects.shikaku'
  },
  {
    name: 'Tet2048',
    category: 'games',
    categoryTr: 'Oyun',
    categoryEn: 'Game',
    descriptionTr: 'Blokları bırak, eşit sayıları birleştir ve 2048’e giden yolu planla. Google Play incelemesinde.',
    descriptionEn: 'Drop blocks, merge equal numbers, and plan your path to 2048. Under Google Play review.',
    color: 'from-cyan-300 to-blue-500',
    image: '/assets/tet2048-banner.png',
    icon: '/assets/tet2048-icon.png',
    playUrl: null
  }
] as const;

export type Language = 'tr' | 'en';

export const navItems = [
  { href: '/', key: 'home' },
  { href: '/#projects', key: 'projects' },
  { href: '/#about', key: 'about' },
  { href: '/#contact', key: 'contact' },
  { href: '/privacy-policy/', key: 'privacy' }
] as const;

export const copy = {
  tr: {
    nav: {
      home: 'Ana sayfa',
      projects: 'Projeler',
      about: 'Hakkımızda',
      contact: 'İletişim',
      privacy: 'Gizlilik'
    },
    hero: {
      eyebrow: 'Minik fikirler, büyük deneyimler',
      title: 'Nioony Projects',
      description:
        'Mobil oyunlar, kullanışlı uygulamalar ve küçük dijital deneyimler geliştiriyoruz. Amacımız hızlı açılan, sade çalışan ve kullanıcıya net değer veren ürünler üretmek.',
      primary: 'Projelerimizi keşfet',
      secondary: 'Hakkımızda'
    },
    stats: [
      ['10+', 'Oyun'],
      ['6+', 'Uygulama'],
      ['15+', 'Deneysel Proje'],
      ['1M+', 'İndirme']
    ],
    projects: {
      eyebrow: 'Projeler',
      title: 'Üzerinde çalıştığımız projelerden bazıları',
      filters: ['Tümü', 'Oyunlar', 'Uygulamalar', 'Deneysel'],
      storeLabels: {
        play: 'Google Play bağlantısı',
        appStore: 'App Store bağlantısı'
      }
    },
    services: {
      eyebrow: 'Neler yapıyoruz',
      title: 'Mobil odaklı ürünleri küçük ama güçlü sistemlerle geliştiriyoruz.',
      cards: [
        ['Mobil Oyunlar', 'Eğlenceli, akıcı ve kısa oturumlara uygun oyun deneyimleri tasarlıyoruz.'],
        ['Mobil Uygulamalar', 'Günlük işleri kolaylaştıran, hızlı ve sade uygulamalar geliştiriyoruz.'],
        ['Deneysel Ürünler', 'Yeni fikirleri küçük prototiplerle test ediyor, işe yarayanları gerçek ürünlere dönüştürüyoruz.']
      ]
    },
    about: {
      eyebrow: 'Hakkımızda',
      title: 'Nioony Projects, bağımsız bir teknoloji stüdyosudur.',
      description:
        'Oyun geliştirme, mobil uygulamalar ve yeni teknolojiler konusunda tutkulu küçük bir ekibiz. Amacımız, kullanıcıların gerçekten değer katan ürünler deneyimlemesini sağlamak.',
      values: ['Kullanıcı odaklı tasarım', 'Temiz ve optimize edilmiş kod', 'Sürekli geliştirme ve destek']
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Fikirlerinizi duymak bizi mutlu eder.',
      description: 'Proje teklifleri, iş birlikleri, destek ve gizlilik talepleri için bizimle iletişime geçebilirsiniz.',
      emailLabel: 'E-posta',
      websiteLabel: 'Web sitesi'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      social: 'Sosyal medya yakında'
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
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy'
    },
    hero: {
      eyebrow: 'Small ideas, meaningful experiences',
      title: 'Nioony Projects',
      description:
        'We build mobile games, useful apps, and small digital experiences. Our goal is to ship products that open fast, feel simple, and create clear value for users.',
      primary: 'Explore our projects',
      secondary: 'About us'
    },
    stats: [
      ['10+', 'Games'],
      ['6+', 'Apps'],
      ['15+', 'Experimental Projects'],
      ['1M+', 'Downloads']
    ],
    projects: {
      eyebrow: 'Projects',
      title: 'Some of the projects we are working on',
      filters: ['All', 'Games', 'Apps', 'Experimental'],
      storeLabels: {
        play: 'Google Play link',
        appStore: 'App Store link'
      }
    },
    services: {
      eyebrow: 'What we do',
      title: 'We build mobile-first products with small but thoughtful systems.',
      cards: [
        ['Mobile Games', 'We design smooth, playful game experiences made for short sessions.'],
        ['Mobile Apps', 'We develop fast and simple apps that make everyday tasks easier.'],
        ['Experimental Products', 'We test new ideas through focused prototypes and turn useful ones into real products.']
      ]
    },
    about: {
      eyebrow: 'About',
      title: 'Nioony Projects is an independent technology studio.',
      description:
        'We are a small team passionate about game development, mobile apps, and new technologies. Our goal is to help users experience products that bring real value.',
      values: ['User-focused design', 'Clean and optimized code', 'Continuous improvement and support']
    },
    contact: {
      eyebrow: 'Contact',
      title: 'We are happy to hear your ideas.',
      description: 'Contact us for project proposals, collaborations, support, and privacy requests.',
      emailLabel: 'Email',
      websiteLabel: 'Website'
    },
    footer: {
      rights: 'All rights reserved.',
      social: 'Social links coming soon'
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
    name: 'Merge Adventure',
    category: 'games',
    categoryTr: 'Oyun',
    categoryEn: 'Game',
    descriptionTr: 'Birleştir, yükselt ve renkli dünyaları keşfet.',
    descriptionEn: 'Merge, upgrade, and discover colorful worlds.',
    color: 'from-emerald-400 to-cyan-400'
  },
  {
    name: 'Focus Daily',
    category: 'apps',
    categoryTr: 'Uygulama',
    categoryEn: 'App',
    descriptionTr: 'Günlük odaklanma ve küçük görev takibi için sade bir mobil uygulama.',
    descriptionEn: 'A simple mobile app for daily focus and small task tracking.',
    color: 'from-teal-300 to-emerald-400'
  },
  {
    name: 'Color Cube',
    category: 'games',
    categoryTr: 'Oyun',
    categoryEn: 'Game',
    descriptionTr: 'Renkli bulmacalar ve kısa oturumlara uygun eğlenceli deneyim.',
    descriptionEn: 'Colorful puzzles and a fun experience built for short sessions.',
    color: 'from-cyan-300 to-blue-500'
  },
  {
    name: 'Pocket Notes',
    category: 'apps',
    categoryTr: 'Uygulama',
    categoryEn: 'App',
    descriptionTr: 'Hızlı not almak için minimal ve kullanışlı mobil not uygulaması.',
    descriptionEn: 'A minimal and useful mobile notes app for quick capture.',
    color: 'from-amber-300 to-rose-400'
  },
  {
    name: 'Tiny Lab',
    category: 'experimental',
    categoryTr: 'Deneysel',
    categoryEn: 'Experimental',
    descriptionTr: 'Küçük fikirleri hızlı prototiplerle test ettiğimiz deneysel ürün alanı.',
    descriptionEn: 'An experimental product space where small ideas are tested through fast prototypes.',
    color: 'from-violet-300 to-teal-300'
  }
] as const;

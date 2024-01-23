export const APP = {
    BASE_URL: '',
    API: {
      COMMON: {
        LOG: '/common/log-user-device/',
        SCRIPT: '/seo/script-main-page/',
      },
      HOME: {
        MAIN: '/home/',
        FOOTER: '/home/web-footer/',
        SUBSCRIBE_NEWS: '/newsletter/submit/',
        HEADER: '/home/header/',
        SEARCH: {
          AUTO_COMPLETE: '/search/auto-complete/',
          POPULAR: '/search/popular/',
        },
      },
      ELASTIC_SEARCH: {
        AUTO_COMPLETE: '/elastic-search/auto-complete/',
      },
    },
    THEME: {
      DARK: 'dark',
      LIGHT: 'light',
    },
    COUNTRY: {
      JO: 'jo',
      KSA: 'ksa',
    },
    LANG: {
      EN: 'en',
      AR: 'ar',
    },
    COMMON: {
      COUNTRY: 'country',
      DEFAULT_LANG: 'ar',
      OTP_RESEND_TIME_SEC: 60,
      OTP_RETRIES_COUNT: 4,
      OTP_VALID_TIME_BY_HOURS: 24,
      OTP_BLOCK_TIME_BY_HOURS: 24,
    },
    SVG: {
      COUNTRY: {
        KSA_CIRCLE: 'flag-ksa-circle.svg',
        JO_CIRCLE: 'flag-jo-circle.svg',
        KSA: 'flag-ksa.svg',
        JO: 'flag-jo.svg',
      },
      DEFAULT_SIZE: 20,
    },
    PHONE_PREFIX: {
      JO: ['07', '7'],
      KSA: ['05', '5'],
    },
    PATHS: {
      ASSETS: 'public/assets',
      ICONS: 'public/assets/icons',
      IMAGES: 'public/assets/images',
    },
    APPS_LINK: {
      MOTORY: {
        IOS: 'https://apps.apple.com/jo/app/motory-موتري/id1409351471',
        ANDROID:
          'https://play.google.com/store/apps/details?id=motory.com.motory',
      },
    },
    PERMISSIONS: {
      BACKEND: 'BackendAdmins',
    },
    BREAKPOINTS: {
      UP_MD: '(min-width: 768px)',
      DOWN_MD: '(max-width: 767px)',
    },
  };
  
  export const CONFIG = {
    COUNTRY_NAME: {
      KSA: {
        AR: 'السعودية',
        EN: 'Saudi Arabia',
      },
      JO: {
        AR: 'الأردن',
        EN: 'Jordan',
      },
    },
  };
  
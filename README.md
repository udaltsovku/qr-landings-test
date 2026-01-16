# Amaya Admin Template

## Пакеты в твоем распоряжении
- [amaya-components](https://github.com/AmayaKids/amaya-components) — Основные компоненты: лейауты, формы логина, менюшки;
- [Element Plus](https://element-plus.org/) — UI-компоненты;
- [Vue Final Modal](https://vue-final-modal.org/) — Модальные окна;
- [toastify-js](https://www.npmjs.com/package/toastify-js) - Тосты (уведомления);
- [moment](https://momentjs.com/) — Работа с датой и временем;
- [vue3-google-login](https://www.npmjs.com/package/vue3-google-login) — Google OAuth;
- [nuxt-icon](https://www.npmjs.com/package/nuxt-icon) — Иконки с [этого сайта](https://icones.js.org/) (в основном используем [коллекцию ion-](https://icones.js.org/collection/ion));

## Доп. плагины
В директории /plugins
- declOfNum — склонение числительных;
- apiClient - axios-клиент для работы с API;
- isMobile - определение является ли устройство мобильным (плохой код);

## .env
```bash
# Публичный ключ для Google OAuth
GOOGLE_CLIENT_ID="592125025000-7a7qhrpqbof7h3uk0q3nj296kefcalt9.apps.googleusercontent.com"

# Хост к API
API_HOST="http://localhost:3000"

# title приложения
APP_TITLE="Amaya Admin"
```

## Структура проекта
- Меню настраивается в `layouts/admin.vue`
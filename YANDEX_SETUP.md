# Инструкция по настройке проверки индексации Яндекс.Ботом

## Шаг 1: Подготовка сайта на Netlify

1. Разверните сайт на Netlify
2. Запомните URL вашего сайта (например, `https://your-site.netlify.app`)
3. Обновите `public/robots.txt` - замените `https://your-site.netlify.app` на ваш реальный URL

## Шаг 2: Регистрация в Яндекс.Вебмастере

1. Перейдите на https://webmaster.yandex.ru/
2. Войдите в аккаунт Яндекс
3. Нажмите "Добавить сайт"
4. Укажите URL вашего сайта (например, `https://your-site.netlify.app`)
5. Подтвердите права на сайт одним из способов:
   - **Мета-тег** (рекомендуется): скопируйте код верификации из Яндекс.Вебмастера
   - Добавьте его в `src/pages/_document.tsx` в тег `<Head>`:
   ```tsx
   <meta name="yandex-verification" content="ВАШ_КОД_ВЕРИФИКАЦИИ" />
   ```
   - Закоммитьте изменения и задеплойте на Netlify
   - Вернитесь в Яндекс.Вебмастер и нажмите "Проверить"

## Шаг 3: Получение OAuth токена

1. Перейдите в раздел "Настройки" → "Доступ"
2. Создайте OAuth токен для API
3. Сохраните токен в безопасном месте

## Шаг 4: Получение Host ID

1. В Яндекс.Вебмастере перейдите в раздел вашего сайта
2. Откройте консоль браузера (F12)
3. Перейдите в раздел "Network" (Сеть)
4. Обновите страницу
5. Найдите запрос к API Яндекс.Вебмастера
6. В URL запроса найдите `hosts/{HOST_ID}`
7. Сохраните `HOST_ID`

Альтернативный способ:
- URL в адресной строке выглядит так: `https://webmaster.yandex.ru/site/{HOST_ID}/`
- `HOST_ID` - это строка вида `https:your-site.netlify.app:443`

## Шаг 5: Запрос индексации страниц

### Через Яндекс.Вебмастер UI:

1. Перейдите в раздел "Индексирование" → "Проверка ответа сервера"
2. Введите URL страницы, которую хотите проиндексировать
3. Нажмите "Проверить"
4. Если страница доступна, нажмите "Добавить в очередь на индексацию"

### Через API (программно):

Используйте созданную утилиту или API endpoint:

```bash
# Установите переменные окружения
export YANDEX_OAUTH_TOKEN="ваш_токен"
export YANDEX_HOST_ID="https:your-site.netlify.app:443"
export BASE_URL="https://your-site.netlify.app"

# Запустите скрипт проверки
npm run check-indexing
```

Или через API endpoint (после деплоя):

```bash
curl -X POST https://your-site.netlify.app/api/check-yandex-indexing \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://your-site.netlify.app/",
      "https://your-site.netlify.app/prognozy"
    ],
    "token": "ваш_токен",
    "hostId": "https:your-site.netlify.app:443"
  }'
```

## Шаг 6: Добавление скрипта в package.json

Добавьте скрипт для удобного запуска проверки:

```json
{
  "scripts": {
    "check-indexing": "ts-node scripts/check-yandex-indexing.ts"
  }
}
```

Также установите необходимые зависимости:

```bash
npm install --save-dev ts-node @types/node
```

## Шаг 7: Настройка переменных окружения

Создайте файл `.env.local` (не коммитьте в git):

```env
YANDEX_OAUTH_TOKEN=ваш_oauth_токен
YANDEX_HOST_ID=https:your-site.netlify.app:443
NEXT_PUBLIC_BASE_URL=https://your-site.netlify.app
```

Для Netlify добавьте переменные в разделе Site settings → Environment variables.

## Полезные ссылки

- [Документация API Яндекс.Вебмастера](https://yandex.ru/dev/webmaster/doc/ru/)
- [Проверка индексации страниц](https://yandex.ru/support/webmaster/recommendations/indexing.html)
- [Руководство по robots.txt](https://yandex.ru/support/webmaster/robots/robots.html)

## Проверка через Яндекс.Бот

После добавления страниц в очередь индексации:

1. Яндекс.Бот начнет обход вашего сайта в течение нескольких дней
2. Проверяйте статус индексации через Яндекс.Вебмастер → "Индексирование" → "История обхода"
3. Используйте скрипт `check-yandex-indexing.ts` для автоматической проверки статуса

## Примечания

- Индексация может занять от нескольких часов до нескольких дней
- Яндекс.Бот учитывает robots.txt и мета-теги robots
- Регулярно обновляйте sitemap.xml при добавлении новых страниц
- Проверяйте доступность страниц через "Проверку ответа сервера" в Яндекс.Вебмастере


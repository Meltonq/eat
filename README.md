# eat

AI cook Telegram bot MVP.

## Setup

```bash
cp .env.example .env
npm install
npm run start
```

## Running the Telegram bot

### Local development (long polling)

1. Set `TELEGRAM_BOT_TOKEN` in `.env`.
2. Leave `TELEGRAM_WEBHOOK_URL` empty.
3. Run `npm run start`.

The bot will use long polling and does not require a public URL.

### Webhook mode (production)

1. Set `TELEGRAM_BOT_TOKEN`.
2. Set `TELEGRAM_WEBHOOK_URL` to a public HTTPS URL, for example
   `https://your-domain.com/webhooks/telegram`.
3. Set `TELEGRAM_WEBHOOK_SECRET` to a random value.
4. Start the server with `npm run start` and ensure the port from `APP_PORT` is exposed.

Telegram will send updates to `/webhooks/telegram`.

## Environment variables

All API keys and sensitive settings live in `.env`. See `.env.example` for the full list.

Key groups:

- Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`, `TELEGRAM_WEBHOOK_URL`
- MariaDB: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
- Redis/BullMQ: `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`
- S3 storage: `S3_ENDPOINT`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`, `S3_BUCKET`, `S3_REGION`, `S3_PHOTO_TTL_DAYS`
- Vision API: `VISION_PROVIDER`, `VISION_API_KEY`, `VISION_ENDPOINT`
- Nutrition API: `NUTRITION_PROVIDER`, `NUTRITION_API_KEY`, `NUTRITION_ENDPOINT`
- Observability: `LOG_LEVEL`, `OTEL_EXPORTER_OTLP_ENDPOINT`

## Documentation

- [Техническое задание](docs/technical-spec-ru.md)

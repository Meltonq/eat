# eat

AI cook Telegram bot MVP.

## Setup

```bash
cp .env.example .env
npm install
npm run start
```

## Environment variables

All API keys and sensitive settings live in `.env`. See `.env.example` for the full list.

Key groups:

- Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`
- MariaDB: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
- Redis/BullMQ: `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`
- S3 storage: `S3_ENDPOINT`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`, `S3_BUCKET`, `S3_REGION`, `S3_PHOTO_TTL_DAYS`
- Vision API: `VISION_PROVIDER`, `VISION_API_KEY`, `VISION_ENDPOINT`
- Nutrition API: `NUTRITION_PROVIDER`, `NUTRITION_API_KEY`, `NUTRITION_ENDPOINT`
- Observability: `LOG_LEVEL`, `OTEL_EXPORTER_OTLP_ENDPOINT`

## Documentation

- [Техническое задание](docs/technical-spec-ru.md)

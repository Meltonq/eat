import 'dotenv/config';

const required = [
  'TELEGRAM_BOT_TOKEN',
  'DB_HOST',
  'DB_NAME',
  'DB_USER',
  'DB_PASSWORD',
  'S3_ENDPOINT',
  'S3_ACCESS_KEY',
  'S3_SECRET_KEY',
  'S3_BUCKET',
  'VISION_PROVIDER',
  'VISION_API_KEY',
  'NUTRITION_PROVIDER',
  'NUTRITION_API_KEY'
];

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.warn(
    `Missing required environment variables: ${missing.join(', ')}.`
  );
}

export const config = {
  env: process.env.NODE_ENV ?? 'development',
  app: {
    port: Number(process.env.APP_PORT ?? 3000),
    baseUrl: process.env.APP_BASE_URL ?? 'http://localhost:3000'
  },
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    webhookSecret: process.env.TELEGRAM_WEBHOOK_SECRET
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 3306),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: Number(process.env.REDIS_PORT ?? 6379),
    password: process.env.REDIS_PASSWORD
  },
  s3: {
    endpoint: process.env.S3_ENDPOINT,
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION ?? 'us-east-1',
    photoTtlDays: Number(process.env.S3_PHOTO_TTL_DAYS ?? 14)
  },
  vision: {
    provider: process.env.VISION_PROVIDER,
    apiKey: process.env.VISION_API_KEY,
    endpoint: process.env.VISION_ENDPOINT
  },
  nutrition: {
    provider: process.env.NUTRITION_PROVIDER,
    apiKey: process.env.NUTRITION_API_KEY,
    endpoint: process.env.NUTRITION_ENDPOINT
  },
  observability: {
    logLevel: process.env.LOG_LEVEL ?? 'info',
    otelExporterEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT
  }
};

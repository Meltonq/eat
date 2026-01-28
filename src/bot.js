import { Telegraf } from 'telegraf';
import { config } from './config.js';

export function createBot() {
  if (!config.telegram.botToken) {
    throw new Error('TELEGRAM_BOT_TOKEN is required to start the bot.');
  }

  const bot = new Telegraf(config.telegram.botToken);

  bot.start((ctx) =>
    ctx.reply(
      'Привет! Отправь фото продуктов, и я предложу рецепты с КБЖУ.'
    )
  );

  bot.help((ctx) =>
    ctx.reply(
      'Команды: /start — начать, /profile — профиль (в разработке).'
    )
  );

  bot.on('photo', async (ctx) => {
    await ctx.reply(
      'Фото получено. Скоро добавим распознавание продуктов. Сейчас это заглушка MVP.'
    );
  });

  bot.on('text', async (ctx) => {
    await ctx.reply(
      'Пока я понимаю только фото и команды /start или /help.'
    );
  });

  return bot;
}

export async function startBot(bot) {
  if (config.telegram.webhookUrl) {
    await bot.telegram.setWebhook(config.telegram.webhookUrl, {
      secret_token: config.telegram.webhookSecret
    });

    await bot.startWebhook(
      '/webhooks/telegram',
      config.telegram.webhookSecret,
      config.app.port
    );

    console.log('Webhook mode enabled.');
    return;
  }

  await bot.launch();
  console.log('Polling mode enabled.');
}

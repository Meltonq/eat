import { config } from './config.js';
import { createBot, startBot } from './bot.js';

const bot = createBot();

startBot(bot).catch((error) => {
  console.error('Failed to start bot.', error);
  process.exit(1);
});

console.log('Eat bot configuration loaded.');
console.log({
  env: config.env,
  appPort: config.app.port,
  visionProvider: config.vision.provider,
  nutritionProvider: config.nutrition.provider
});

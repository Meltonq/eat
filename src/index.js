import { config } from './config.js';

console.log('Eat bot configuration loaded.');
console.log({
  env: config.env,
  appPort: config.app.port,
  visionProvider: config.vision.provider,
  nutritionProvider: config.nutrition.provider
});

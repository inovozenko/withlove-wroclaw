module.exports = (function () {
  const {Telegraf} = require('telegraf');
  const handler = require('./handler');
  const env = require('../config');

  function connect(app) {
    const bot = new Telegraf(`${env.token}`);

    app.use(bot.webhookCallback(`/bot${env.token}`));

    bot.telegram.setWebhook(`${env.url}/bot${env.token}`)
      .then(() => {
        console.log('Webhook set, resolve');
      });

    return bot;
  }

  function startBot(app) {
    handler(connect(app))
      .then(() => {
        console.log('Bot connected');
      })
  }

  return startBot;
})();

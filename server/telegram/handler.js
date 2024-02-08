module.exports = async function update(bot) {
  bot.start(async ctx => {
    await bot.telegram.sendMessage(ctx.message.from.id,
      'Welcome!\n' +
      'Here you can describe your request, the AVG team will respond you as soon as possible.\n' +
      'Thank you for contacting us');
  });

  bot.on('text', async ctx => {
    try {
      const message = `ID: ${ctx.message.from.id}\nFirst name: ${ctx.message.from.first_name}\nProfile: https://t.me/${ctx.message.from.username}\nRequest message: ${ctx.message.text}`;

      await bot.telegram.sendMessage(-1002005137880, message);
    } catch (e) {
      console.log(e);
    }
  });
};

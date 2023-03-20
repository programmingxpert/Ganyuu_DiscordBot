const { Command } = require('discord.js-commando');

module.exports = class WhoMadeMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'about',
      aliases: ['botinfo', 'whomademe', 'bot-maker', 'bot-creator'],
      memberName: 'about',
      group: 'other',
      description: "Learn about the bot and it's creator!"
    });
  }

  run(message) {
    message.channel.send(
      'Made by <@577741902837972992> This is a multipurpose bot! Mainly based on music!'
    );
  }
};

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'announce',
      aliases: ['say', 'print'],
      memberName: 'announce',
      group: 'other',
      guildOnly: true,
      clientPermissions: ['SEND_MESSAGES', 'MANAGE_MESSAGES'],
      description: 'Make the bot say anything!',
      args: [
        {
          key: 'channel_name',
          prompt: 'In which channel do you want the announcement to be sent?',
          type: 'channel'
        },
        {
          key: 'text',
          prompt: ':microphone2: What do you want the bot to say?',
          type: 'string'
        }
      ]
    });
  }

  run(message, { channel_name, text }) {
    const embed = new MessageEmbed()
      .setTitle(`Announcement`)
      .setColor('#888888')
      .setDescription(text)
      .setTimestamp()
      .setFooter(
        `Announcement by ${message.member.displayName},`,
        message.author.displayAvatarURL()
      );

    channel_name.send(embed).catch(e => console.error(e));
    return;
  }
};

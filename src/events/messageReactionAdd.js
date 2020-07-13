const {MessageEmbed} = require('discord.js');

module.exports = async (client, reaction, user) => {
    reaction.message.channel.send('hello?');
}
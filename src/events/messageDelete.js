const {MessageEmbed} = require('discord.js');

module.exports = (client, message) => {
    const channel = message.guild.channels.cache.find(channel => channel.name === "spam");
    if(!channel)
        return;

    const msgDeleteEmbed = new MessageEmbed()
        .setAuthor(`${message.author.tag} deleted a message.`, message.author.displayAvatarURL())
        .setDescription(message.content)
        .addField('Channel', message.channel.name)
        .setColor(0xdf0000)
        .setTimestamp();
    channel.send(msgDeleteEmbed);
}
const {MessageEmbed} = require('discord.js');

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "test-commands");
    if(!channel)
        return;
    
    const embed = new MessageEmbed()
        .setAuthor(member.displayName + ' has left the server.', member.user.displayAvatarURL())
        .addField('User: ', member.user, true)
        .setColor(0xdf0000)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg')
        .setTimestamp();
    
    channel.send(embed);
}
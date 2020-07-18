const {MessageEmbed} = require('discord.js');

module.exports = (client, guild, user) => {
    const modChannel = guild.channels.cache.find(channel => channel.name === "moderators");
    if(!modChannel)
        return;

    var log = new MessageEmbed()
        .setTitle(user.username + ' was unbanned.')
        .addField('User: ', user, true)        
        .setColor(0x32ff25)
        .setThumbnail(user.displayAvatarURL())
        .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg')
        .setTimestamp();
    modChannel.send(log);
}
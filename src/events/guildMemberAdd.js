const {MessageEmbed} = require('discord.js');

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "spam");
    if(!channel)
        return;
    
    const embed = new MessageEmbed()
        .setAuthor(member.displayName + ' just joined the server!', member.user.displayAvatarURL())
        .setColor(0x32ff25)
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(`Go to <#702231983853666335> to pick your favorite EP/album, and a color will be added to your name.`)
        .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg')
        .setTimestamp();
    
    channel.send(`${member}`, embed);
}
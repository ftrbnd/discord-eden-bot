const Discord = require('discord.js');

module.exports = async (client, reaction, user) => {
    if(reaction.message.partial)  await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;

    const modChannel = reaction.message.member.guild.channels.cache.find(channel => channel.name === "moderators");
    if(!modChannel)
        return;

    if (reaction.message.channel.name === 'suggestions' && reaction.emoji.name == '👍' && reaction.count >= 5) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(reaction.message.member.displayName + `'s suggestion received ${reaction.count} thumbs up`, reaction.message.member.user.displayAvatarURL()) // message + their avatar
            .setColor(0xff7818) // orange
            .setDescription(reaction.message.content)
            .setThumbnail(reaction.message.member.user.displayAvatarURL()) 
            .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg') // server icon
            .setTimestamp(); // when 
        modChannel.send(embed);
    }
}
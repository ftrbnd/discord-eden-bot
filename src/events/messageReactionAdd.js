const {MessageEmbed} = require('discord.js');

module.exports = async (client, reaction, user) => {
    const modChannel = reaction.message.member.guild.channels.cache.find(channel => channel.name === 'moderators');
    if(!modChannel)
        return;
    console.log('hello1');
    
    try {
        if(reaction.message.channel.name === 'suggestions' && reaction.emoji.name === '👍' && reaction.count % 10 === 0) {
            console.log('hello2');
            const embed = new MessageEmbed()
                .setAuthor(reaction.message.member.displayName + `'s suggestion has received ${reaction.count} upvotes`, reaction.message.member.user.displayAvatarURL()) // message + their avatar
                .setColor(0xff7818) // orange
                .setDescription(reaction.message.content)
                .setThumbnail(reaction.message.member.user.displayAvatarURL()) 
                .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg') // server icon
                .setTimestamp(); // when 
            modChannel.send(embed);
        }
    } catch(err) {
        console.log(err);
    }
}
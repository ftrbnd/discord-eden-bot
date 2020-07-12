const Discord = require('discord.js');

module.exports = (client, oldMember, newMember) => {
    const channel = newMember.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel)
        return;
    
    if(oldMember.roles.cache.size !== newMember.roles.cache.size) {
        // check if they didn't have SERVER BOOSTER role before and did have it after
        if(!oldMember.roles.cache.has('702225844113899591') && newMember.roles.cache.has('702225844113899591')) {
            newMember.roles.add('731688468366884934'); // 'futurebound' role

            const boostEmoji = client.emojis.cache.get('731696862460903534');
            const embed = new Discord.MessageEmbed()
                .setAuthor(newMember.displayName + ' just boosted the server!', newMember.user.displayAvatarURL())
                .setColor(0xf47fff)
                .setThumbnail('https://emoji.gg/assets/emoji/1819_boostingtop.gif')
                .setDescription(`They are now <@&731688468366884934>.`)
                .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg')
                .setTimestamp();
            
            channel.send(embed);
        }
        // else if the SERVER BOOSTER role is gone
        else if(oldMember.roles.cache.has('702225844113899591') && !newMember.roles.cache.has('702225844113899591')) {
            newMember.roles.remove('731688468366884934'); // 'futurebound' role
        }
    }
}
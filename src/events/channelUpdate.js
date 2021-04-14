const {MessageEmbed} = require('discord.js');
var Filter = require('bad-words'),
    filter = new Filter();
filter.removeWords('sex');

module.exports = (client, oldChannel, newChannel) => {
    const modChannel = oldChannel.guild.channels.cache.find(channel => channel.name === "spam");
    if(!modChannel)
        return;

    if(filter.isProfane(newChannel.name)) {
        const uncensoredName = newChannel.name;
        const censoredName = filter.clean(newChannel.name);
        newChannel.setName(censoredName);

        const attemptedProfanity = new MessageEmbed()
            .setTitle(`A custom voice channel's name contained profanity.`)
            .addFields(
                { name: 'Previous name', value: `${oldChannel.name}`, inline: true },
                { name: 'Attempted name', value: `${uncensoredName}`, inline: true },
                { name: 'Censored name', value: `${censoredName}`, inline: true },  
            )
            .setColor(0xdf0000)
            .setFooter('futurebound', oldChannel.guild.iconURL({ dynamic: true }))
            .setTimestamp();
        modChannel.send(attemptedProfanity);
    }
    else if(oldChannel.name != newChannel.name) {
        const changedEmbed = new MessageEmbed()
            .setTitle(`A custom voice channel's name was changed.`)
            .addFields(
                { name: 'Previous name', value: oldChannel.name, inline: true },
                { name: 'New name', value: newChannel.name, inline: true },
            )
            .setColor(0x32ff25)
            .setFooter('futurebound', oldChannel.guild.iconURL({ dynamic: true }))
            .setTimestamp();
        modChannel.send(changedEmbed);
    }
}
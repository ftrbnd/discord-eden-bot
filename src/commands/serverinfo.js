const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    const createdAt = message.guild.createdAt.toString().split(' ');

    const serverInfo = new MessageEmbed()
        .setTitle(`***${message.guild}*** server info`)
        .setThumbnail(message.guild.iconURL({ dynamic : true}))
        .setColor(0xf03200)
        .addFields(
            {
                name: 'Owner',
                value: message.guild.owner,
                inline: true,
            },
            {
                name: 'Region',
                value: message.guild.region,
                inline: true,
            },
            {
                name: 'Date Created',
                value: createdAt[1] + ' ' + createdAt[2] + ' ' + createdAt[3],
                inline: true,
            },
            {
                name: 'Member Count',
                value: message.guild.memberCount,
                inline: true,
            },
            {
                name: 'Server Level',
                value: message.guild.premiumTier,
                inline: true,
            }, 
            {
                name: 'Server Boosts',
                value: message.guild.premiumSubscriptionCount,
                inline: true,
            },     
        );

    message.channel.send(serverInfo);
}
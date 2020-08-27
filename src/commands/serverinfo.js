const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    const futurebound = client.guilds.cache.get('655655072885374987');

    const createdAt = futurebound.createdAt.toString().split(' ');
    //console.log(createdAt[1], createdAt[2], createdAt[3]);

    const serverInfo = new MessageEmbed()
        .setTitle(`***${futurebound}*** server info`)
        .setThumbnail('https://cdn.discordapp.com/icons/655655072885374987/a_86186bcc651f636b2e71ccad38cf5b40.gif')
        .setColor(0xf03200)
        .addFields(
            {
                name: 'Owner',
                value: futurebound.owner,
                inline: true,
            },
            {
                name: 'Region',
                value: futurebound.region,
                inline: true,
            },
            {
                name: 'Date Created',
                value: createdAt[1] + ' ' + createdAt[2] + ' ' + createdAt[3],
                inline: true,
            },
            {
                name: 'Member Count',
                value: futurebound.memberCount,
                inline: true,
            },
            {
                name: 'Server Level',
                value: futurebound.premiumTier,
                inline: true,
            }, 
            {
                name: 'Server Boosts',
                value: futurebound.premiumSubscriptionCount,
                inline: true,
            },     
        );

    message.channel.send(serverInfo);
}
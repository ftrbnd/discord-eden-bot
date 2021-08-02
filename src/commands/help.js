const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    const helpEmbed = new MessageEmbed()
        .setTitle(`***${message.guild}*** commands list`)
        .setThumbnail(message.guild.iconURL({ dynamic : true}))
        .setColor(0xf03200)
        .addFields(
            {
                name: 'Prefix',
                value: process.env.PREFIX,
                inline: true,
            },
            {
                name: 'Moderator Commands',
                value: 'ban, clear, kick, listeningparty, listeningpartyopen, lockdown, mute, react, reopen, say, slowmode, survivor, unmute, warn',
                inline: false,
            },
            {
                name: 'General Commands',
                value: '8ball, eden, lyrics, serverinfo, typingtest, urban',
                inline: false,
            },  
        );

    message.channel.send(helpEmbed);
}
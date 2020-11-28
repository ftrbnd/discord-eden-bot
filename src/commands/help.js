const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    const helpEmbed = new MessageEmbed()
        .setTitle(`***${message.guild}*** commands list`)
        .setThumbnail('https://cdn.discordapp.com/icons/655655072885374987/a_86186bcc651f636b2e71ccad38cf5b40.gif')
        .setColor(0xf03200)
        .addFields(
            {
                name: 'Prefix',
                value: process.env.PREFIX,
                inline: false,
            },
            {
                name: 'Commands',
                value: '8ball, ban, clear, dm, jon, kick, lyrics, mute, say, serverinfo, slowmode, typingtest, unmute, urban, warn',
                inline: false,
            },  
        );

    message.channel.send(helpEmbed);
}
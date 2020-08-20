const {MessageEmbed} = require('discord.js');

module.exports = (client) => {
    client.user.setActivity(`no future`, {
        type: "LISTENING",
        url: "https://open.spotify.com/track/702GncAZXiEArIWBgaPJDi"
    });

    let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'spam')
    if(announcingChannel) {
        var readyEmbed = new MessageEmbed()
        .setDescription(`**${client.user.tag}** has restarted and is now online!`)
        .setColor(0x32ff25);
        announcingChannel.send(readyEmbed);
    }
    
    console.log(`${client.user.tag} has restarted and is now online!`);
}
const {MessageEmbed} = require('discord.js');

module.exports = (client) => {
    function randomStatus() {
        let status = ["no future", "New World Tapes"];
        let randomIndex = Math.floor(Math.random() * status.length)
        
        client.user.setActivity(status[randomIndex], {
            type: "LISTENING",
            url: "https://open.spotify.com/album/7HDfpCVCVM5nlR5blLX3E8"
        });
    }; setInterval(randomStatus, 3600000)

    let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'test-commands')
    if(announcingChannel) {
        var readyEmbed = new MessageEmbed()
        .setDescription(`**${client.user.tag}** has restarted and is now online!`)
        .setColor(0x32ff25);
        announcingChannel.send(readyEmbed);
    }
    
    console.log(`${client.user.tag} has restarted and is now online!`);
}
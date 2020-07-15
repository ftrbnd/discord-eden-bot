module.exports = (client) => {
    client.user.setActivity(`Stingray`, {
        type: "LISTENING",
        url: "https://open.spotify.com/album/7HDfpCVCVM5nlR5blLX3E8"
    });

    let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'test-commands')
    if(announcingChannel) {
        announcingChannel.send(`**${client.user.tag}** has restarted and is now online!`);
    }
    
    console.log(`${client.user.tag} has restarted and is now online!`);
}
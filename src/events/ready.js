module.exports = (client) => {
    client.user.setActivity(`no future`, {
        type: "LISTENING",
        url: "https://open.spotify.com/track/702GncAZXiEArIWBgaPJDi"
    });

    let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'test-commands')
    if(announcingChannel) {
        announcingChannel.send(`**${client.user.tag}** has restarted and is now online!`);
    }
    
    console.log(`${client.user.tag} has restarted and is now online!`);
}
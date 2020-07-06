module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        let announcement = message.content.substring(10); //length of command 'announce' + 2

        const targetChannel = 'test-commands'
        let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === targetChannel)
        if(announcingChannel) {
            announcingChannel.send(announcement);
        }
    }
    else {
        message.channel.send('you do not have permission to use this command.');
    }
}
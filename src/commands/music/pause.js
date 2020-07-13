module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        message.channel.send('music player is currently a work in progress.');
    }
    else {
        message.channel.send('music player is currently a work in progress.');
    }
}
module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        let announcement = message.content.substring(10 + args[0].length); // length of command 'announce' + 2

        console.log(args[0]); // name of channel

        const targetChannel = args[0]
        let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === targetChannel)
        args.shift();
        if(announcingChannel) {
            announcingChannel.send(announcement);
        }
        else {
            message.channel.send('channel doesn\'t exist.');
        }
    }
    else {
        message.channel.send('you do not have permission to use this command.');
    }
}
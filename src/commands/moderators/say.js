const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        if(args.length === 0)
        {
            const errEmbed = new MessageEmbed()
                .setDescription('please enter a channel to announce in.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        let announcement = message.content.substring(10 + args[0].length); // length of command 'announce' + 2    
        //console.log(args);
        if(args.length < 2) {
            const errEmbed = new MessageEmbed()
                .setDescription('cannot send an empty message')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        //console.log(args[0]); // args[0] = name of channel

        const targetChannel = args[0]
        let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === targetChannel)
        args.shift();
        if(announcingChannel) {
            announcingChannel.send(announcement);
        }
        else {
            const errEmbed = new MessageEmbed()
                .setDescription('channel doesn\'t exist.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        if(!args[0]) {
            const errEmbed = new MessageEmbed()
                .setDescription('you need to specify a time (in seconds).')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }
        if(isNaN(args[0])) {
            const errEmbed = new MessageEmbed()
                .setDescription('that is not a number!')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        message.channel.setRateLimitPerUser(args[0]);
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
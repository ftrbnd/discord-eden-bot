const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        var user = message.mentions.users.first();
        if(!user) {
            const errEmbed = new MessageEmbed()
                .setDescription('you didn\'t mention anyone.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch(err) {
            member = null;
            console.log(err);
        }

        if(!member) {
            const errEmbed = new MessageEmbed()
                .setDescription('they aren\'t in the server!')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }     

        var dmContent = args.slice(1).join(' ');
        if(!dmContent) {
            const errEmbed = new MessageEmbed()
                .setDescription('cannot send an empty message.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        user.send(dmContent);
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
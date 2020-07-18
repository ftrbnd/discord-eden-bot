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

        var reason = args.slice(1).join(' ');
        if(!reason) {
            const errEmbed = new MessageEmbed()
                .setDescription('a reason must be given.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        const modChannel = member.guild.channels.cache.find(channel => channel.name === "moderators");
        if(!modChannel)
            return;

        var log = new MessageEmbed()
            .setTitle(member.displayName + ' was banned.')
            .addField('User: ', user, true)        
            .addField('By: ', message.author, true)
            .addField('Reason: ', reason)
            .setColor(0xdf0000)
            .setThumbnail(user.displayAvatarURL())
            .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg')
            .setTimestamp();
        modChannel.send(log);

        var ban = new MessageEmbed()
            .setTitle('You were bannned.')
            .setDescription(reason)
            .setColor(0xdf0000)
            .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg')
            .setTimestamp();

        try {
            await user.send(ban);
        } catch(err) {
            console.log(err);
        }

        message.guild.members.ban(user, options = { reason: reason });
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
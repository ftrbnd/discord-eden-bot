const {MessageEmbed, VoiceBroadcast} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator

        if(args.length == 0) { // if no listening party name is entered
            const errEmbed = new MessageEmbed()
                .setDescription("please enter the listening party's name.")
                .setColor(0xdf0000)
            return message.channel.send(errEmbed)
        }

        listeningPartyName = args.join(' ')

        const categoryChannel = await message.guild.channels.create('Listening Party', {
            type: 'category',
            position: 2,
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone.id, 
                    deny: 'VIEW_CHANNEL'
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'test bot for the main bot').id, 
                    allow: 'VIEW_CHANNEL'
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'Groovy').id, 
                    allow: 'VIEW_CHANNEL'
                }
            ]
        })
        
        const listeningPartyChat = await message.guild.channels.create('listening party chat', {
            type: 'text',
            parent: categoryChannel,
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone.id, 
                    deny: 'VIEW_CHANNEL'
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'Bot').id, 
                    deny: 'VIEW_CHANNEL'
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'test bot for the main bot').id, 
                    allow: 'VIEW_CHANNEL'
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'Groovy').id, 
                    allow: 'VIEW_CHANNEL'
                }
            ]
        })
        
        const voiceChannel = await message.guild.channels.create(`${listeningPartyName}`, {
            type: 'voice',
            parent: categoryChannel,
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone.id, 
                    deny: ['VIEW_CHANNEL', 'SPEAK']
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'Bot').id, 
                    deny: 'VIEW_CHANNEL'
                },
                {
                    id: message.guild.roles.cache.find(role => role.name === 'Groovy').id, 
                    allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK']
                }
            ]
        })

        const confirmEmbed = new MessageEmbed()
            .setDescription(`**${listeningPartyName}** channels have been created!`)
            .setColor(0x32ff25)
        message.channel.send(confirmEmbed)
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
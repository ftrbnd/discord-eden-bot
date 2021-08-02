const {MessageEmbed, VoiceBroadcast} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator

        var categoryChannel = message.guild.channels.cache.find(channel => channel.name === 'Listening Party')
        categoryChannel.edit(
            {
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone.id, 
                        allow: 'VIEW_CHANNEL'
                    }
                ]
            }
        )

        // collections store items randomly, so you have to check the channel type before editing it
        if(categoryChannel.children.first().type === 'text') {
            categoryChannel.children.first().edit( //
                {
                    permissionOverwrites: [
                        {
                            id: message.guild.roles.everyone.id,
                            allow: 'VIEW_CHANNEL'
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
                }
            )

            categoryChannel.children.last().edit(
                {
                    permissionOverwrites: [
                        {
                            id: message.guild.roles.everyone.id, 
                            allow: ['VIEW_CHANNEL', 'CONNECT']
                        },
                        {
                            id: message.guild.roles.everyone.id, 
                            deny: 'SPEAK'
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
                }
            )
        } else {
            categoryChannel.children.first().edit( //
                {
                    permissionOverwrites: [
                        {
                            id: message.guild.roles.everyone.id,
                            allow: ['VIEW_CHANNEL', 'CONNECT']
                        },
                        {
                            id: message.guild.roles.everyone.id, 
                            deny: 'SPEAK'
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
                }
            )

            categoryChannel.children.last().edit(
                {
                    permissionOverwrites: [
                        {
                            id: message.guild.roles.everyone.id, 
                            allow: 'VIEW_CHANNEL'
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
                }
            )
        }

        const confirmEmbed = new MessageEmbed()
            .setDescription(`**${listeningPartyName}** channels have been opened to everyone!`)
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
const {MessageEmbed} = require('discord.js');

module.exports = async (client, oldState, newState) => {
    const channel = oldState.guild.channels.cache.find(channel => channel.name === "spam");
    if(!channel)
        return;
    const voiceChat = oldState.guild.channels.cache.find(channel => channel.name === "voice-chat");
    if(!voiceChat)
        return;

    if(newState.channelID === '818934014164467772') { // if they join the 'join to create vc'
        const joinToCreate = newState.guild.channels.cache.get('818934014164467772') // 'Join To Create VC' channel
        const parentCategory = joinToCreate.parent // category that this channel is under

        const customChannel = await newState.guild.channels.create(`${newState.member.displayName}'s channel`, {
            type: 'voice',
            permissionOverwrites: [
                {
                    id: newState.member.user.id,
                    allow: ['MANAGE_CHANNELS'],
                },
            ],
        })
        customChannel.setParent(parentCategory) // move the new channel to the category

        newState.setChannel(customChannel) // move the user to the newly created channel

        helloEmbed = new MessageEmbed()
            .setDescription('You just created your own voice channel! Feel free to edit the channel name to let others know what your channel is about.')
            .setColor(0x32ff25)
            .setFooter('futurebound', newState.guild.iconURL({ dynamic: true }))
        voiceChat.send(`${newState.member}`, helloEmbed)
            .then(message => message.delete({ timeout : 60000 }));

        const vcUpdateEmbed = new MessageEmbed()
            .setDescription(`${oldState.member.user.tag} created **${customChannel.name}**`)
            .setColor(0x32ff25)
            .setFooter(`User ID: ${oldState.member.user.id}`, oldState.member.user.displayAvatarURL());
        return channel.send(vcUpdateEmbed);
    }

    if(oldState.channel === null && newState.channel !== null) { // user joined a voice channel
        const vcUpdateEmbed = new MessageEmbed()
            .setDescription(`${newState.member.user.tag} joined **${newState.channel.name}**`)
            .setColor(0x32ff25)
            .setFooter(`User ID: ${newState.member.user.id}`, newState.member.user.displayAvatarURL());
        return channel.send(vcUpdateEmbed);
    }

    if(oldState.channel !== null && newState.channel === null) { // user left a voice channel
        const vcUpdateEmbed = new MessageEmbed()
            .setDescription(`${oldState.member.user.tag} left **${oldState.channel.name}**`)
            .setColor(0xdf0000)
            .setFooter(`User ID: ${oldState.member.user.id}`, oldState.member.user.displayAvatarURL());
        channel.send(vcUpdateEmbed);
    }

    if(oldState.channel.parent.id == '819305275165114398' && oldState.channel.id != '818934014164467772') { // if the old channel is a custom channel
        if(oldState.channel.members.size == 0) { // delete once it's empty
            oldState.channel.delete(`${oldState.channel.name} was empty`)
            
            const vcUpdateEmbed = new MessageEmbed()
                .setDescription(`**${oldState.channel.name}** was deleted after being empty`)
                .setColor(0xdf0000)
                .setTimestamp()
            return channel.send(vcUpdateEmbed);
        }
    }
}
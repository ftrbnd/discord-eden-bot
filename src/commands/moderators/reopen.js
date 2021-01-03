const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        const serverBooster = message.guild.roles.cache.get('704966097434312766')
        const noFuture = message.guild.roles.cache.get('702225844113899591')
        const vertigo = message.guild.roles.cache.get('702225672147566642')
        const ityttmom = message.guild.roles.cache.get('702226305164509185')
        const endCredits = message.guild.roles.cache.get('702226350324318299')
        const everyone = message.guild.roles.cache.get('655655072885374987')

    
        serverBooster.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES']) // default permissions for @everyone including: SEND_MESSAGES, EMBED_LINKS, ATTACH_FILES
            .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
            .catch(console.error);

        noFuture.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES']) 
            .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
            .catch(console.error);

        vertigo.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES']) 
            .catch(console.error);

        ityttmom.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'])
            .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
            .catch(console.error);
        
        endCredits.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES']) 
            .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
            .catch(console.error);

        everyone.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES']) 
            .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
            .catch(console.error);

        const openEmbed = new MessageEmbed()
            .setDescription(`**${message.guild.name}** is now open!`)
            .setColor(0x32ff25);
        message.channel.send(openEmbed)
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
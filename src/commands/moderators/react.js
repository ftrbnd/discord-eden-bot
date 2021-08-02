const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        
        message.channel.messages.fetch({ limit: 2 })
            .then(messages => {
                console.log(messages)
                let lastMessage = messages.last()

                args.forEach((element) => {
                    var emojiToReact = message.guild.emojis.cache.find(emoji => emoji.name === element)
                    lastMessage.react(emojiToReact)
                })
            })
            .catch(console.log)
        
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
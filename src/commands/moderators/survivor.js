const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator

        const emojiMap = new Map()
        emojiMap.set('0209', '02:09')
        emojiMap.set('end_credits', 'End Credits')
        emojiMap.set('gravity', 'Gravity')
        emojiMap.set('nocturne', 'Nocturne')
        emojiMap.set('interlude', 'Interlude')
        emojiMap.set('wake_up', 'Wake Up')
        emojiMap.set('cmiyc', 'catch me if you can')
        
        const argsCopy = [...args]

        var songArray = [] // contains elements in the format of 'EMOJI - Song Name'
        while(args.length > 0) {
            const emojiName = args.shift() // get the emoji name
            const songEmoji = message.guild.emojis.cache.find(emoji => emoji.name === emojiName) // find the emoji
            songArray.push(`${songEmoji} - ${emojiMap.get(emojiName)}`)// put them together in one string and add to array
        }

        var finalString = ''
        songArray.forEach(function(item, index, array) {
            finalString += item + "\n\n"
        })

        const survivorEmbed = new MessageEmbed()
            .setTitle('END CREDITS EP - SURVIVOR')
            .setDescription(finalString)
            .setColor(0xc0a694)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic : true}) )

        await message.channel.send("Remember to vote for your **LEAST** favorite song! <@&871450610216611941>", survivorEmbed)
        
        // react to the poll with each song's emoji
        argsCopy.forEach((element) => {
            var emojiToReact = message.guild.emojis.cache.find(emoji => emoji.name === element)
            message.channel.lastMessage.react(emojiToReact)
        })

    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
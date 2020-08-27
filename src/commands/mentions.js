const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message) => {
    if(message.content.includes('good morning') || message.content.includes('Morning') || message.content.includes('morning') || message.content.includes('gm') || message.content.includes('Good Morning') || message.content.includes('Good morning') || message.content.includes('GOOD MORNING')) {
        const messages = ['GOOD MORNING!', 'good morning x', 'goooood morning', 'mornin'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('good night') || message.content.includes('goodnight') || message.content.includes('nini') || message.content.includes('gn') || message.content.includes('night')) {
        const messages = ['nini', 'night night', 'good night x', 'dont let the bed bugs bite x'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('hey') || message.content.includes('hi') || message.content.includes('hello') || message.content.includes('Hi') || message.content.includes('Hello') || message.content.includes('Hey')) {
        const messages = ['hello x', 'hey', 'hi x'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('how are you') || message.content.includes('how are u') || message.content.includes('how r u')) {
        const messages = ['i am ok', 'just vibing', 'im good !', ':/'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('what\'s up') || message.content.includes('whats up') || message.content.includes('sup') || message.content.includes('What\'s up') || message.content.includes('Sup')) {
        const messages = ['nothing much', 'just vibing', 'been looking at the sky', 'sup'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('sex') || message.content.includes('catching feelings')) {
        message.channel.send(`catching feelings > sex`);
    }
    else if(message.content.includes('love') || message.content.includes('ily')) {
        const messages = ['i love you too x', 'ily2 x'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('miss you') || message.content.includes('miss u')) {
        const messages = ['i miss you too :((', 'miss u 2 x'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('how old are you') || message.content.includes('how old are u') || message.content.includes('how old')) {
        const messages = ['i am 24', '24'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${message.author} ` + randomMessage);
    }
    else if(message.content.includes('grape')) {
        const messages = ['shut up you grape lookin 🍇', '🍇'];
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage);
    }
    else if(message.content.includes('oh no')) {
        message.channel.send(`i think i'm catching feelings`);
    }
    else if(message.content.includes('listening') || message.content.includes('party') || message.content.includes('listening party')) {
        message.channel.send(`next listening party: check <#713128726413443102>, hope to see you there x`);
    }
    else if(message.content.includes('help')) {
        const helpEmbed = new MessageEmbed()
        .setTitle(`***futurebound*** commands list`)
        .setThumbnail('https://cdn.discordapp.com/icons/655655072885374987/a_86186bcc651f636b2e71ccad38cf5b40.gif')
        .setColor(0xf03200)
        .addFields(
            {
                name: 'Prefix',
                value: process.env.PREFIX,
                inline: true,
            },
            {
                name: 'Commands',
                value: 'announce, ban, clear, kick, mute, slowmode, unmute, warn, serverinfo',
                inline: false,
            },  
        );

        message.channel.send(helpEmbed);
    }
    else {
        // egg, peacesign, meep, high
        const emojis = ['704981741705625611', '655848045287571456', '724685754386612226', '655849255272972319']
        var randomIndex = emojis[Math.floor(Math.random() * emojis.length)];
        const emoji = client.emojis.cache.get(randomIndex);
        message.channel.send(`${emoji}`)
            .then(message => message.delete({ timeout : 3000 }));;
    }
}
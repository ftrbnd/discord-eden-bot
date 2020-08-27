const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    // const futurebound = client.guilds.cache.get('655655072885374987');
    let question = message.content.slice(process.env.PREFIX.length + 6);
    if(!question) {
        const errEmbed = new MessageEmbed()
                .setDescription('please enter a message.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
    }
    //console.log(question);

    const responses = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.',
                        'Don’t count on it.', 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.',
                     'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.',
                    'Yes.', 'Yes – definitely.', 'You may rely on it.'];

    const eightBall = new MessageEmbed()
        .setTitle('🎱 ' + question)
        .setDescription(responses[Math.floor(Math.random()*(responses.length))])
        .setColor('RANDOM');

    message.channel.send(eightBall);
}
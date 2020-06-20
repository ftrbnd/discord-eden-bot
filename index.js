require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel)
        return;
    
    channel.send(`Welcome to the **futurebound** server, ${member}! \nIf you have a favorite album/EP, go to <#702231983853666335> and a color will be added to your name :)`)
});

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case 'mcmxcv':
            message.channel.send('https://mcmxcv.eu')
            break;
        case 'albums':
            if(args[1] === 'vertigo') {
                message.channel.send('https://ftrbnd.co/vertigo')
            }
            else {
                message.channel.send('Invalid argument.')
            }
            break;
        case 'clear':
            if(!args[1])
                return message.reply('ERROR: please define a second argument (How many messages will be deleted? ex: $clear 3).')
            message.channel.bulkDelete(args[1]);
            break;

        case 'embed':
            const embed = new Discord.MessageEmbed()
                .setTitle('User Information')
                .setThumbnail(message.author.displayAvatarURL())
                .addField('Username', message.author.username)
                .addField('Favorite Album', message.guild.roles)
                .setColor(0xf03200)
                message.channel.send(embed);
            break;
        case 'rules':
            //const jon = bot.emojis.get("655848045287571456")
            message.channel.send(`Welcome to the **futurebound** Discord server! \n
            Server link: https://discord.link/futurebound 
            \n **Rules:** 
            > ■ Do not spam 
            > ■ No derogatory slurs/terms 
            > ■ Be aware of the text channel topics 
            > ■ Be considerate of others in voice channels 
            > ■ Use the appropriate text channels when in a voice channel 
            > ■ No inappropriate nicknames 
            > ■ *be kind and respectful uwu* - anna 
            \n \n
            Message a @Moderator if you have any questions: 
            <@617075082564730880>  
            <@166755438707212289>  
            <@190533083341127681> 
            <@201917777185865729>  
            <@240634156650856448>  
            <@617075082564730880> `);
            break;
    }
})

bot.login();
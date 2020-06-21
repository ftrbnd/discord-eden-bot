require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;

bot.on('ready', () => {
    console.log('This bot is now online!');
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
        case 'hello':
            message.channel.send('hi guys x')
            break;
        case 'sex':
            message.channel.send('catching feelings > sex')
            break;
        case 'rules':
            message.channel.send(`Welcome to the **futurebound** Discord server! \nServer link: https://discord.link/futurebound 
            \n **Rules:** \n> ■ Do not spam \n > ■ No derogatory slurs/terms \n > ■ Be aware of the text channel topics \n > ■ Be considerate of others in voice channels \n > ■ Use the appropriate text channels when in a voice channel \n > ■ No inappropriate nicknames \n > ■ \"*be kind and respectful uwu*\" - anna 
            \nMessage a <@&691882703674540042> if you have any questions: \n <@617075082564730880> \n <@166755438707212289> \n <@190533083341127681> \n <@201917777185865729> \n <@326615547565441024> \n <@240634156650856448> `);
            break;
        case 'roles':
            // "react with your favorite album/ep to add a color to your name"
            // list the 4 albums/eps
            // reacts
            // if an album is selected: removeAllRoles() except ServerBooster
            //      and then add the new role
            const ayy = bot.emojis.get("704982349305348107");
            message.channel.send(`${ayy} lmao`);
            break;
        // case 'mcmxcv':
        //     message.channel.send('https://mcmxcv.eu')
        //     break;
        // case 'albums':
        //     if(args[1] === 'vertigo') {
        //         message.channel.send('https://ftrbnd.co/vertigo')
        //     }
        //     else {
        //         message.channel.send('Invalid argument.')
        //     }
        //     break;
        // case 'clear':
        //     if(!args[1])
        //         return message.reply('ERROR: please define a second argument (How many messages will be deleted? ex: $clear 3).')
        //     message.channel.bulkDelete(args[1]);
        //     break;
        // case 'embed':
        //     const embed = new Discord.MessageEmbed()
        //         .setTitle('User Information')
        //         .setThumbnail(message.author.displayAvatarURL())
        //         .addField('Username', message.author.username)
        //         .addField('Favorite Album', message.guild.roles)
        //         .setColor(0xf03200)
        //         message.channel.send(embed);
        //     break;
    }
})

bot.login();
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
            message.channel.send('work in progress');
            break;
    }
})

bot.login();
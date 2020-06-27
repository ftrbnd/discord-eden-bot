require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = process.env.DISCORD_TOKEN;
const PREFIX = process.env.PREFIX;


client.on('ready', () => {
    client.user.setActivity(`Cold Feet`, {
        type: "LISTENING",
        url: "https://open.spotify.com/track/64V0ryfWb55o8alGZdk65i"
    });

    console.log('This bot is now online!');
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel)
        return;
    
    channel.send(`Welcome to the **futurebound** server, ${member}! \nIf you have a favorite album/EP, go to <#702231983853666335> and a color will be added to your name :)`)
});


client.on('message', message => {
    if(message.mentions.has(client.user)) { // if the bot is mentioned
        if(message.content.includes('good morning') || message.content.includes('morning')) {
            const messages = ['GOOD MORNING', 'good morning x', 'goooood morning', 'mornin'];
            var randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(`${message.author} ` + randomMessage);
        }
        else if(message.content.includes('good night') || message.content.includes('nini')) {
            const messages = ['nini', 'night night', 'good night x', 'dont let the bed bugs bite'];
            var randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(`${message.author} ` + randomMessage);
        }
        else if(message.content.includes('hey') || message.content.includes('hi') || message.content.includes('hello')) {
            const messages = ['hello x', 'hey', 'hi x'];
            var randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(`${message.author} ` + randomMessage);
        }
        else if(message.content.includes('how are you') || message.content.includes('how are u') || message.content.includes('how r u')) {
            const messages = ['i am ok', 'just vibing', 'im good !', ':/'];
            var randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(`${message.author} ` + randomMessage);
        }
        else if(message.content.includes('what\'s up') || message.content.includes('whats up') || message.content.includes('sup')) {
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
            message.channel.send(`next listening party: **july 4**, check <#713128726413443102>, hope to see you there x`);
        }
        // else if(message.content.includes('announcement')) {
        //   message.channel.send('@everyone' + ' don\'t forget! the listening party is next week at 12pm pst. \njoin us 40 minutes early to listen to VÉRITÉ\'s set 👀');
        // }
        else {
            // egg, peacesign, meep, high
            const emojis = ['704981741705625611', '655848045287571456', '724685754386612226', '655849255272972319']
            var randomIndex = emojis[Math.floor(Math.random() * emojis.length)];
            const emoji = client.emojis.cache.get(randomIndex);
            message.channel.send(`${emoji}`);
        }
    }

    if (message.author.bot || !message.content.startsWith(PREFIX)) return; // if the command is from a bot or it doesn't start with the prefix
    let args = message.content.substring(PREFIX.length).split(" "); // if prefix is used

    switch(args[0]) {
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
        case 'announcement':
            message.channel.send()
        case 'cold_feet':
            const cold_feet = client.emojis.cache.get("725208054416539650");
            message.channel.send(`${cold_feet}`);
            break;
        case 'play':
        case 'p':
            message.channel.send('music player is currently a work in progress');
            break;
        case 'skip':
            message.channel.send('music player is currently a work in progress');
            break;
        case 'stop':
            message.channel.send('music player is currently a work in progress');
            break;
    }
});

client.login();
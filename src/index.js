require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs').promises;
const path = require('path');

const TOKEN = process.env.DISCORD_TOKEN;
const PREFIX = process.env.PREFIX;

const client = new Discord.Client();
client.login(TOKEN);
client.commands = new Map();

client.on('ready', () => {
    client.user.setActivity(`no future`, {
        type: "LISTENING",
        url: "https://open.spotify.com/track/702GncAZXiEArIWBgaPJDi"
    });

    console.log(`${client.user.tag} is now online!`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel)
        return;
    
    channel.send(`Welcome to the **futurebound** server, ${member}! \nIf you have a favorite album/EP, go to <#702231983853666335> and a color will be added to your name :)`)
});

client.on('message', async function(message) {
    if(message.mentions.has(client.user)) { // if the bot is mentioned
        if(message.content.includes('good morning') || message.content.includes('morning')) {
            const messages = ['GOOD MORNING', 'good morning x', 'goooood morning', 'mornin'];
            var randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(`${message.author} ` + randomMessage);
        }
        else if(message.content.includes('good night') || message.content.includes('nini')) {
            const messages = ['nini', 'night night', 'good night x', 'dont let the bed bugs bite x'];
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
        else {
            // egg, peacesign, meep, high
            const emojis = ['704981741705625611', '655848045287571456', '724685754386612226', '655849255272972319']
            var randomIndex = emojis[Math.floor(Math.random() * emojis.length)];
            const emoji = client.emojis.cache.get(randomIndex);
            message.channel.send(`${emoji}`);
        }
    }

    if(message.author.bot) return;
    if(!message.content.startsWith(PREFIX)) return;

    let cmdArgs = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/));
    let cmdName = cmdArgs.shift();
    //console.log(cmdName);
    //console.log(cmdArgs);
    if(client.commands.get(cmdName)) {
        client.commands.get(cmdName).run(client, message, cmdArgs);
    }
    else {
        console.log("Command does not exist.")
        message.channel.send("Command does not exist.");
    }
});

// IIFE - immediately invoked function expression
(async function registerCommands(dir = 'commands') {
    // Read the directory/file
    let files = await fs.readdir(path.join(__dirname, dir));
    //console.log(files);
    // Loop through each file
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory()) // If files is a directory, recursively call registerCommands
            registerCommands(path.join(dir, file));
        else {
            // Check if the file is a .js file
            if(file.endsWith(".js")) {
                let cmdName = file.substring(0, file.indexOf(".js"));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
                //console.log(client.commands);
            }
        }
    }
})()


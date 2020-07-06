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

    let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'test-commands')
    if(announcingChannel) {
        announcingChannel.send(`${client.user.tag} is now online!`);
    }
    
    console.log(`${client.user.tag} is now online!`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel)
        return;
    
    channel.send(`Welcome to the **futurebound** server, ${member}! \nIf you have a favorite album/EP, go to <#702231983853666335> and a color will be added to your name :)`)
});

client.on('message', async function(message) {
    if(message.author.bot) return; // ignore if it's a bot

    if(message.mentions.has(client.user)) { // if the bot is mentioned
        client.commands.get('mentions').run(client, message); 
    }

    if(!message.content.startsWith(PREFIX)) return;

    let cmdArgs = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/));
    let cmdName = cmdArgs.shift();
    //console.log(cmdName);
    //console.log(cmdArgs);
    if(client.commands.get(cmdName)) {
        client.commands.get(cmdName).run(client, message, cmdArgs);
    }
    else {
        //console.log("Command does not exist.");
        message.channel.send("command does not exist.");
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
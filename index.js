require('dotenv').config();

const Discord = require('discord.js');
const ytdl =  require('ytdl-core');

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;


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
    let args = message.content.substring(prefix.length).split(" "); // if prefix is used

    switch(args[0]) {
        // $rules has served its purpose
        // case 'rules':
        //     message.channel.send(`Welcome to the **futurebound** Discord server! \nServer link: https://discord.link/futurebound 
        //     \n **Rules:** \n> ■ Do not spam \n > ■ No derogatory slurs/terms \n > ■ Be aware of the text channel topics \n > ■ Be considerate of others in voice channels \n > ■ Use the appropriate text channels when in a voice channel \n > ■ No inappropriate nicknames \n > ■ \"*be kind and respectful uwu*\" - anna 
        //     \nMessage a <@&691882703674540042> if you have any questions: \n <@617075082564730880> \n <@166755438707212289> \n <@190533083341127681> \n <@201917777185865729> \n <@326615547565441024> \n <@240634156650856448> `);
        //     break;
        case 'roles':
            // "react with your favorite album/ep to add a color to your name"
            // list the 4 albums/eps
            // reacts
            // if an album is selected: removeAllRoles() except ServerBooster
            //      and then add the new role
            message.channel.send('work in progress');
            break;
        case 'p':
            if (message.channel.type !== 'text') return;

            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
                const jon_gun = client.emojis.cache.get("720508944929390653")
                return message.reply(`please join a voice channel first ${jon_gun}`);
            }

            voiceChannel.join().then(connection => {
                const stream = ytdl(args[1], { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
    
                dispatcher.on('end', () => voiceChannel.leave());
            });

            process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
            break;
        case 'cold_feet':
            const cold_feet = client.emojis.cache.get("725208054416539650");
            message.channel.send(`${cold_feet}`);
    }

    if(message.mentions.has(client.user)) { // if the bot is mentioned
        if(message.content.includes('good morning') || message.content.includes('morning')) {
            message.channel.send(`${message.author} GOOD MORNING`);
        }
        else if(message.content.includes('good night')) {
            message.channel.send(`${message.author} gooood night <3`);
        }
        else if(message.content.includes('hey') || message.content.includes('hi') || message.content.includes('hello')) {
            message.channel.send(`${message.author} hello x`);
        }
        else if(message.content.includes('sex') || message.content.includes('catching feelings')) {
            message.channel.send(`catching feelings > sex`);
        }
        else if(message.content.includes('love')) {
            message.channel.send(`${message.author} i love you too x`);
        }
        else if(message.content.includes('miss you') || message.content.includes('miss u')) {
            message.channel.send(`${message.author} i miss u 2 x`);
        }
        else if(message.content.includes('grape')) {
            message.channel.send('🍇');
        }
        else if(message.content.includes('oh no')) {
            message.channel.send(`i think i'm catching feelings`);
        }
        else if(message.content.includes('listening') || message.content.includes('party') || message.content.includes('listening party')) {
            message.channel.send(`next listening party: **july 4**, check <#713128726413443102>, hope to see you there x`);
        }
        else {
            message.channel.send(`${message.author} hi`); // simple 'hi' if just mentioned
        }
    }
});

client.login();
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;

client.on('ready', () => {
    client.user.setActivity("no future", {
        type: "LISTENING",
        url: "https://open.spotify.com/track/2nBwC0sBIO4xiZEsOCRb7N?si=C6XhCRbpSIGHMg1SqAiMxw"
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
        if(message.content.includes('hey') || message.content.includes('hi') || message.content.includes('hello')) {
            message.channel.send(`${message.author} hello x`);
        }
        else if(message.content.includes('love')) {
            message.channel.send(`${message.author} i love you too x`);
        }
        else if(message.content.includes('grape')) {
            message.channel.send('🍇');
        }
        else if(message.content.includes('sex') || message.content.includes('catching feelings')) {
            message.channel.send(`catching feelings > sex`);
        }
        else if(message.content.includes('listening') || message.content.includes('party') || message.content.includes('listening party')) {
            message.channel.send(`${message.author} next listening party: **july 4**, check <#713128726413443102>, hope to see you there x`);
        }
        else {
            message.channel.send(`${message.author} hi`); // simple 'hi' if just mentioned
        }
}
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

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
    }
})

client.login();
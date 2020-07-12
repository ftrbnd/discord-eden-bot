const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = async (client, message,) => {
    if(message.author.bot) return; // ignore if it's a bot

    const welcomeChannel = message.member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!welcomeChannel)
        return;

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName + ' just boosted the server!', message.member.user.displayAvatarURL()) // message + their avatar
    .setColor(0xf47fff) // pink boost color
    .setThumbnail('https://emoji.gg/assets/emoji/1819_boostingtop.gif') // nitro boost gif
    .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg') // server icon
    .setTimestamp(); // when the boost happened

    if(message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3') {
        embed.setDescription(`They are <@&704966097434312766>. \n**futurebound** has achieved **Level 3**!`);
        welcomeChannel.send(`${message.author}`); //message.author = User type
        welcomeChannel.send(embed);
    }
    else if (message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2') {
        embed.setDescription(`They are <@&704966097434312766>. \n**futurebound** has achieved **Level 2**!`);
        welcomeChannel.send(`${message.author}`); //message.author = User type
        welcomeChannel.send(embed);
    }
    else if (message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1') {
        embed.setDescription(`They are <@&704966097434312766>. \n**futurebound** has achieved **Level 1**!`);
        welcomeChannel.send(`${message.author}`); //message.author = User type
        welcomeChannel.send(embed);
    }
    else if (message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION') {
        embed.setDescription(`They are <@&704966097434312766>.`);
        welcomeChannel.send(`${message.author}`); //message.author = User type
        welcomeChannel.send(embed);
    }


    if(message.mentions.has(client.user) && !message.author.bot) { // if the bot is mentioned and it's not by a bot
        client.commands.get('mentions').run(client, message); 
    }

    if(!message.content.startsWith(PREFIX)) return; // commands

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
}
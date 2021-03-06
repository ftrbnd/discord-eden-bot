const {MessageEmbed} = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = async (client, message,) => {
    // using mee6's reddit webhook
    if(message.channel.id === '692822264982405240' && message.webhookID) { // if sent in spam channel and is a webhook message
        const subredditChannel = message.channel.guild.channels.cache.find(channel => channel.name === "subreddit");
        if(!subredditChannel)
            return;

        var redditEmbed = new MessageEmbed()
            .setTitle(message.embeds[0].title)
            .setURL(message.embeds[0].author.url)
            .setColor(0xFF4500)
            .setFooter(`Posted by ${message.embeds[0].fields[0].value} on /r/eden`, 'https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png')
            .setTimestamp()

        if(message.embeds[0].description == 'undefined' || message.embeds[0].description == undefined)
            redditEmbed.setDescription('')
        else
            redditEmbed.setDescription(message.embeds[0].description)
        
        if(message.embeds[0].image != null)
            redditEmbed.setImage(message.embeds[0].image.url)

        subredditChannel.send(redditEmbed);
    }
    if(message.channel.id === '811050618260291614') { // if message is sent in subreddit channel
        const upvoteEmoji = client.emojis.cache.get('748310857653420164');
        const downvoteEmoji = client.emojis.cache.get('748310857871654954');
        message.react(upvoteEmoji)     // react with upvote first
            .then(() => message.react(downvoteEmoji)); // then react with downvote
    }
    
    if(message.author.bot) return; // ignore if it's a bot

    if(message.channel.type === 'dm') {
        //console.log('THIS IS A DM');
        spamChannel = client.guilds.cache.get('655655072885374987').channels.cache.get('692822264982405240'); // spam channel for futurebound server

        const dmEmbed = new MessageEmbed()
            .setAuthor(`Direct message from ${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(message.content)
            .setColor(0x7289da)
            .setTimestamp();

        return spamChannel.send(dmEmbed);
    }

    const welcomeChannel = message.member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!welcomeChannel)
        return;

    const generalChannel = message.member.guild.channels.cache.find(channel => channel.name === "general");
    if(!generalChannel)
        return;

    const boostEmbed = new MessageEmbed()
        .setAuthor(message.member.displayName + ' just boosted the server!', message.member.user.displayAvatarURL()) // message + their avatar
        .setColor(0xf47fff) // pink boost color
        .setThumbnail('https://emoji.gg/assets/emoji/1819_boostingtop.gif') // nitro boost gif
        .addField('Server Level', `${message.guild.premiumTier}`, true)
        .addField('Server Boosts', `${message.guild.premiumSubscriptionCount}`, true)
        .setFooter('futurebound', 'https://i.imgur.com/8TsEfzo.jpg') // server icon
        .setTimestamp(); // when the boost happened

    if(message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3') {
        boostEmbed.setDescription(`Server booster role: <@&704966097434312766>. \n**futurebound** has achieved **Level 3**!`);
        welcomeChannel.send(`${message.author}`, boostEmbed);
        generalChannel.send(boostEmbed);
    }
    else if(message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2') {
        boostEmbed.setDescription(`Server booster role: <@&704966097434312766>. \n**futurebound** has achieved **Level 2**!`);
        welcomeChannel.send(`${message.author}`, boostEmbed);
        generalChannel.send(boostEmbed);
    }
    else if(message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1') {
        boostEmbed.setDescription(`Server booster role: <@&704966097434312766>. \n**futurebound** has achieved **Level 1**!`);
        welcomeChannel.send(`${message.author}`, boostEmbed);
        generalChannel.send(boostEmbed);
    }
    else if(message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION') {
        boostEmbed.setDescription(`Server booster role: <@&704966097434312766>`);
        welcomeChannel.send(`${message.author}`, boostEmbed);
        generalChannel.send(boostEmbed);
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
    // else {
    //     const errEmbed = new MessageEmbed()
    //         .setDescription('command does not exist.')
    //         .setColor(0xdf0000);
    //     message.channel.send(errEmbed);
    // }
}
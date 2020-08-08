require('dotenv').config();

const Discord = require('discord.js');
const Twitter = require('twit');

const fs = require('fs').promises;
const path = require('path');
const config = require('./config.js');

const TOKEN = process.env.DISCORD_TOKEN;

const client = new Discord.Client();
client.login(TOKEN);
client.commands = new Map();

const twitterClient = new Twitter(config);
function isReply(tweet) {
    if (tweet.retweeted_status || tweet.in_reply_to_status_id || tweet.in_reply_to_status_id_str || tweet.in_reply_to_user_id
    || tweet.in_reply_to_user_id_str || tweet.in_reply_to_screen_name) 
        return true;
    return false;
}
const stream = twitterClient.stream('statuses/filter', {
    follow: '1598790960', // twtter used id for @iameden
});
stream.on('tweet', tweet => {
    const twitterMessage = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
    if(isReply(tweet) == false) {
        const tweetChannel = client.channels.cache.get('739243205807308831');
        const retweetEmoji = client.emojis.cache.get('710637137455742997');
        // now get last message and react with retweet and heart
        tweetChannel.send(twitterMessage) // send tweet
            .then(() => tweetChannel.messages.fetch({ limit: 1 }) // fetch latest message
            .then(messages => {
                let lastMessage = messages.first(); // message retrieved
                lastMessage.react(retweetEmoji)     // react with retweet
                    .then(() => lastMessage.react('❤')) // react with heart
            })
            .catch(console.error));
    }
    return false;
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
})();

// IIFE - immediately invoked function expression
(async function registerEvents(dir = 'events') {
    // Read the directory/file
    let files = await fs.readdir(path.join(__dirname, dir));
    //console.log(files);
    // Loop through each file
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory()) // If files is a directory, recursively call registerCommands
            registerEvents(path.join(dir, file));
        else {
            // Check if the file is a .js file
            if(file.endsWith(".js")) {
                let eventName = file.substring(0, file.indexOf(".js"));

                try {
                    let eventModule = require(path.join(__dirname, dir, file));
                    client.on(eventName, eventModule.bind(null, client));
                    //console.log(eventName + ' was registered.');
                }
                catch(err) {
                    console.log(err);
                }
                //console.log(client.commands);
            }
        }
    }
})()
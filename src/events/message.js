const PREFIX = process.env.PREFIX;

module.exports = (client, message) => {
    if(message.author.bot) return; // ignore if it's a bot

    if(message.mentions.has(client.user) && !message.author.bot) { // if the bot is mentioned
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
}
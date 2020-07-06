module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        message.channel.send(`Welcome to the **futurebound** Discord server! \nServer link: https://discord.link/futurebound 
        \n **Rules:** \n> ■ Do not spam \n > ■ No derogatory slurs/terms \n > ■ Be aware of the text channel topics \n > ■ Be considerate of others in voice channels \n > ■ Use the appropriate text channels when in a voice channel \n > ■ No inappropriate nicknames \n > ■ \"*be kind and respectful uwu*\" - anna 
        \nMessage a <@&691882703674540042> if you have any questions: \n <@617075082564730880> \n <@166755438707212289> \n <@190533083341127681> \n <@201917777185865729> \n <@326615547565441024> \n <@240634156650856448> `);
    }
    else {
        message.channel.send('you do not have permission to use this command.');
    }
}
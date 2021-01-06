const {MessageEmbed} = require('discord.js');

module.exports = (client, oldState, newState) => {
    const channel = oldState.guild.channels.cache.find(channel => channel.name === "spam");
    if(!channel)
        return;

    if(oldState.channel === null && newState.channel !== null) { // user joined a voice channel
        const vcUpdateEmbed = new MessageEmbed()
            .setDescription(`${newState.member.user.tag} joined **${newState.channel.name}**`)
            .setColor(0x32ff25)
            .setFooter(`User ID: ${newState.member.user.id}`, newState.member.user.displayAvatarURL());
        return channel.send(vcUpdateEmbed);
    } 
    else if(oldState.channel !== null && newState.channel === null) { // user left a voice channel
        const vcUpdateEmbed = new MessageEmbed()
            .setDescription(`${oldState.member.user.tag} left **${oldState.channel.name}**`)
            .setColor(0xdf0000)
            .setFooter(`User ID: ${oldState.member.user.id}`, oldState.member.user.displayAvatarURL());
        return channel.send(vcUpdateEmbed);
    }
}
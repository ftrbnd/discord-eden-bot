module.exports = (client, oldMember, newMember) => {
    const channel = newMember.guild.channels.cache.find(channel => channel.name === "spam");
    if(!channel)
        return;
    
    if(oldMember.roles.cache.has('704966097434312766') && !newMember.roles.cache.has('704966097434312766')) {
        const errEmbed = new MessageEmbed()
            .setDescription(`${newMember}'s server boost has left the server.`)
            .setColor(0xdf0000);
        channel.send(errEmbed);
    }
}
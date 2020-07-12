module.exports = (client, oldMember, newMember) => {
    const channel = newMember.guild.channels.cache.find(channel => channel.name === "test-commands");
    if(!channel)
        return;
    
    if(oldMember.roles.cache.has('704966097434312766') && !newMember.roles.cache.has('704966097434312766')) {
        channel.send(`${newMember}'s server boost has left the server.`)
    }
}
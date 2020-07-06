module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        message.channel.send('role reaction menu is currently a work in progress');
        // "react with your favorite album/ep to add a color to your name"
        // list the 4 albums/eps
        // reacts
        // if an album is selected: removeAllRoles() except ServerBooster
        //      and then add the new role
    }
    else {
        message.channel.send('you do not have permission to use this command.');
    }
}
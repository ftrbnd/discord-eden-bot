module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        
        if(args.length === 0)
            return message.channel.send('please enter the amount of messages to delete.');

        let deleteAmount = parseInt(args[0]);
        if(deleteAmount < 1)
            return message.channel.send('you need to delete at least one message.')
        else if(deleteAmount > 100)
            return message.channel.send('you cannot delete more than 100 messages.')

        message.channel.bulkDelete(deleteAmount + 1, true);
        
        if(deleteAmount === 1) {
            message.channel.send(`sucessfully deleted **${deleteAmount}** message!`)
                .then(message => message.delete({ timeout : 5000 }));
        }
        else {
            message.channel.send(`sucessfully deleted **${deleteAmount}** messages!`)
                .then(message => message.delete({ timeout : 5000 }));
        }
    }
    else {
        message.channel.send('you do not have permission to use this command.');
    }
}
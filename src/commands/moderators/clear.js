const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(message.member.roles.cache.has('691882703674540042')) { // Moderator
        
        if(args.length === 0) {
            const errEmbed = new MessageEmbed()
                .setDescription('please enter the amount of messages to delete.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        let deleteAmount = parseInt(args[0]);
        if(deleteAmount < 1) {
            const errEmbed = new MessageEmbed()
                .setDescription('you need to delete at least one message.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }
        else if(deleteAmount > 100) {
            const errEmbed = new MessageEmbed()
                .setDescription('you cannot delete more than 100 messages.')
                .setColor(0xdf0000);
            return message.channel.send(errEmbed);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        
        if(deleteAmount === 1) {
            const oneMessage = new MessageEmbed()
                .setDescription(`sucessfully deleted **${deleteAmount}** message!`)
                .setColor(0x32ff25);
            message.channel.send(oneMessage)
                .then(message => message.delete({ timeout : 1000 }));
        }
        else {
            const multiMessages = new MessageEmbed()
                .setDescription(`sucessfully deleted **${deleteAmount}** messages!`)
                .setColor(0x32ff25);
            message.channel.send(multiMessages)
                .then(message => message.delete({ timeout : 1000 }));
        }
    }
    else {
        const perms = new MessageEmbed()
            .setDescription('you do not have permission to use this command.')
            .setColor(0xdf0000);
        message.channel.send(perms);
    }
}
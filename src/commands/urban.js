const {MessageEmbed} = require('discord.js');
const urban = require('urban');

module.exports.run = async(client, message, args) => {
    urbanResults = urban(args);

    urbanResults.first(function(json) {
        //console.log(json);
        
        var jsonDefinition = json.definition;
        jsonDefinition = jsonDefinition.split('[').join('');
        jsonDefinition = jsonDefinition.split(']').join('');
        // want to get rid of brackets in json.definition and json.example
        var jsonExample = json.example;
        jsonExample = jsonExample.split('[').join('');
        jsonExample = jsonExample.split(']').join('');

        var jsonDate = json.written_on.toString().slice(0, 10); // make more reader-friendly
        //console.log(jsonDate)

        const urbanEmbed = new MessageEmbed()
            .setTitle(json.word.toUpperCase())
            .setThumbnail('https://i.imgur.com/azXqb1w.png')
            .setColor(0x134fe6)
            .addFields(
                {
                    name: 'Definition',
                    value: jsonDefinition,
                    inline: false,
                },
                {
                    name: 'Example',
                    value: jsonExample,
                    inline: false,
                }
            )
            .addField('Urban Dictionary', `[link](${json.permalink})`)
            .setFooter('by ' + json.author + ' on ' + jsonDate);
        message.channel.send(urbanEmbed);
    });
}
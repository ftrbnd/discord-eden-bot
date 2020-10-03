var imgur = require('imgur');
const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
    var jonAlbumOne = '3Zh414x';
    var jonAlbumTwo = 'DZ913Hd';
    var jonAlbumThree = 'PUfyYtt';

    var jonImages = [];

    imgur.getAlbumInfo(jonAlbumOne)
        .then(function(json) {
            for(var i = 0; i < json.data.images.length; i++) {
                jonImages.push(json.data.images[i].link);
            }
        })
        .catch(function (err) {
            console.error(err.message);
        });

    imgur.getAlbumInfo(jonAlbumTwo)
        .then(function(json) {
            for(var i = 0; i < json.data.images.length; i++) {
                jonImages.push(json.data.images[i].link);
            }
        })
        .catch(function (err) {
            console.error(err.message);
        });

    imgur.getAlbumInfo(jonAlbumThree)
        .then(function(json) {
            for(var i = 0; i < json.data.images.length; i++) {
                jonImages.push(json.data.images[i].link);
            }

            const jonEmbed = new MessageEmbed()
                .setImage(jonImages[Math.floor(Math.random()*(jonImages.length))])
                .setColor('RANDOM');

            message.channel.send(jonEmbed);
        })
        .catch(function (err) {
            console.error(err.message);
        });
}
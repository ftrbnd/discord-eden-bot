const {MessageEmbed} = require('discord.js');
const mongo = require('../mongo');

module.exports = async (client) => {
    const songs = ['02:09', 'End Credits', 'Gravity', 'Nocturne', 'Interlude', 'Wake Up', 
        'catch me if you can', 'Billie Jean', 'sex', 'drugs', 'and', 'rock + roll', 
        'Fumes', 'XO', 'Circles', 'wrong', 'take care', 'start//end', 'wings', 'icarus', 
        'lost//found', 'crash', 'gold', 'forever//over', 'float', 'wonder', 
        'love; not wrong (brave)', 'falling in reverse', 'about time', 'stutter', 'all you need is love', 
        'nowhere else', '909', 'good morning', 'in', 'hertz', 'static', 'projector', 
        'love, death, distraction', 'how to sleep', 'calm down', 'just saying', 'fomo', 
        'so far so good', 'isohel', 'tides', 'rushing', '$treams', '2020', 'out', 'untitled', 
        'Peaked', 'Cold Feet', 'Stingray', 'cant help']

    const updateDelay = 180; // status will change every 180 seconds
    let currentIndex = 0;

    setInterval(() => {
        const activity = songs[currentIndex]
        client.user.setActivity(activity, {
            type: "LISTENING",
        })

        // update currentIndex
        // if it's the last one, get back to 0
        currentIndex = currentIndex >= songs.length - 1 
        ? 0
        : currentIndex + 1
    }, updateDelay * 1000)


    let announcingChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'spam')
    if(announcingChannel) {
        var readyEmbed = new MessageEmbed()
        .setDescription(`**${client.user.tag}** has restarted and is now online!`)
        .setColor(0x32ff25);
        announcingChannel.send(readyEmbed);
    }
    
    console.log(`${client.user.tag} has restarted and is now online!`);
}
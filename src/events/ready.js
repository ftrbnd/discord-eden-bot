const {MessageEmbed} = require('discord.js');

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

    // var songTimes = new Map()
    // songTimes.set('02:09', 251)
    // songTimes.set('End Credits', 240)
    // songTimes.set('Gravity', 231)
    // songTimes.set('Nocturne', 198)
    // songTimes.set('Interlude', 164)
    // songTimes.set('Wake Up', 280)
    // songTimes.set('catch me if you can', 189)
    // songTimes.set('Billie Jean', 216)
    // songTimes.set('sex', 219)
    // songTimes.set('drugs', 338)
    // songTimes.set('and', 133)
    // songTimes.set('rock + roll', 296)
    // songTimes.set('Fumes', 215)
    // songTimes.set('XO', 160)
    // songTimes.set('Circles', 276)
    // songTimes.set('wrong', 64)
    // songTimes.set('take care', 196)
    // songTimes.set('start//end', 334)
    // songTimes.set('wings', 177)
    // songTimes.set('icarus', 405)
    // songTimes.set('lost//found', 204)
    // songTimes.set('crash', 232)
    // songTimes.set('gold', 197)
    // songTimes.set('forever//over', 343)
    // songTimes.set('float', 199)
    // songTimes.set('wonder', 264)
    // songTimes.set('love; not wrong (brave)', 217)
    // songTimes.set('falling in reverse', 299)
    // songTimes.set('about time', 195)
    // songTimes.set('stutter', 257)
    // songTimes.set('all you need is love', 250)
    // songTimes.set('nowhere else', 196)
    // songTimes.set('909', 258)
    // songTimes.set('good morning', 209)
    // songTimes.set('in', 31)
    // songTimes.set('hertz', 199)
    // songTimes.set('static', 49)
    // songTimes.set('projector', 222)
    // songTimes.set('love, death, distraction', 257)
    // songTimes.set('how to sleep', 198)
    // songTimes.set('calm down', 155)
    // songTimes.set('just saying', 246)
    // songTimes.set('fomo', 190)
    // songTimes.set('so far so good', 206)
    // songTimes.set('isohel', 271)
    // songTimes.set('????', 180)
    // songTimes.set('tides', 103)
    // songTimes.set('rushing', 308)
    // songTimes.set('$treams', 201)
    // songTimes.set('2020', 211)
    // songTimes.set('out', 43)
    // songTimes.set('untitled', 216)
    // songTimes.set('Peaked', 174)
    // songTimes.set('Cold Feet', 164)
    // songTimes.set('Stingray', 175)
    // songTimes.set('cant help', 150)

    var updateDelay = 180
    let currentIndex = 0

    setInterval(() => {
        const activity = songs[currentIndex]
        // updateDelay = songTimes.get(activity) // status will last as long as its respective songs lasts
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
        announcingChannel.send(readyEmbed)
    }
    
    console.log(`${client.user.tag} has restarted and is now online!`)
}
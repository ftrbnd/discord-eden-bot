const {MessageEmbed} = require('discord.js');
const ftl = require('findthelyrics');

module.exports.run = async(client, message, args) => {
    // given values
    const artist = "EDEN"
    const songs = ['End Credits', 'Gravity', 'Nocturne', 'Interlude', 'Wake Up', 
        'Billie Jean', 'sex', 'drugs', 'rock + roll', 
        'Fumes', 'XO', 'Circles', 'wrong', 'take care', 'start//end', 'wings', 'icarus', 
        'lost//found', 'crash', 'gold', 'forever//over', 'float', 'wonder', 
        'love; not wrong (brave)', 'falling in reverse', 'about time', 'all you need is love', 
        'nowhere else', '909', 'good morning', 'hertz', 'static', 'projector', 
        'love, death, distraction', 'how to sleep', 'calm down', 'just saying', 'fomo', 
        'so far so good', 'isohel', 'tides', 'rushing', '$treams', '2020', 'untitled', 
        'Peaked', 'Cold Feet', 'Stingray', 'cant help']
    // '????' & 'and'  & 'catch me if you can' return different songs
    
    const randomSong = songs[Math.floor(Math.random() * songs.length)]

     // log the command
     console.log(`LYRICS COMMAND WAS USED - SONG: ${randomSong}`)

    var line = ''
    const artistSong = `${artist} ${randomSong}`
    ftl.find(artistSong, function(err, resp) {
        if (!err) {
            var lyrics = resp

            lines = lyrics.split("\n") // split into an array containing each line
            lines = lines.filter(item => item) // get rid of empty lines ''
            
            // find 2 lines that don't include [Intro], [Chorus], etc.
            do {
                randomIndex = Math.floor(Math.random() * lines.length)
                if(randomIndex == lines.length - 1) // if the last line is selected, move back one line so we are able to select 2 lines
                    randomIndex--
                
                line = lines[randomIndex] + "\n" + lines[randomIndex + 1]
            }
            while(lines[randomIndex].includes('[') || lines[randomIndex + 1].includes('[')) 

            // embed that will show the song lyric
            const guessTheSong = new MessageEmbed()
                .setTitle(`Guess The Song`)
                .setThumbnail('https://i.imgur.com/rQmm1FM.png')
                .setColor(0xfa57c1)
                .setDescription(line)
                .setFooter(message.guild.name, message.guild.iconURL({ dynamic : true}))

            message.channel.send(guessTheSong)
        } else {
            console.log(err)
        }
    })

    // using message collector, collect the first message that guesses the song correctly
    const filter = m => m.content.toLowerCase().includes(randomSong.toLowerCase())
    const collector = message.channel.createMessageCollector(filter)

    collector.on('collect', m => {
        
        const winnerEmbed = new MessageEmbed()
            .setTitle(m.author.username + ' guessed the song!')
            .addField('Song', randomSong)
            .setDescription(line)
            .setThumbnail(m.author.displayAvatarURL({ dynamic : true}))
            .setColor(0x32ff25)
            .setFooter(m.guild.name, message.guild.iconURL({ dynamic : true}) )

        message.channel.send(winnerEmbed)

        collector.stop()
    })
}
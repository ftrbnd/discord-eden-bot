require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs').promises;
const path = require('path');

const TOKEN = process.env.DISCORD_TOKEN;
const PREFIX = process.env.PREFIX;

const client = new Discord.Client();
client.login(TOKEN);
client.commands = new Map();

// IIFE - immediately invoked function expression
(async function registerCommands(dir = 'commands') {
    // Read the directory/file
    let files = await fs.readdir(path.join(__dirname, dir));
    //console.log(files);
    // Loop through each file
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory()) // If files is a directory, recursively call registerCommands
            registerCommands(path.join(dir, file));
        else {
            // Check if the file is a .js file
            if(file.endsWith(".js")) {
                let cmdName = file.substring(0, file.indexOf(".js"));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
                //console.log(client.commands);
            }
        }
    }
})();

// IIFE - immediately invoked function expression
(async function registerEvents(dir = 'events') {
    // Read the directory/file
    let files = await fs.readdir(path.join(__dirname, dir));
    //console.log(files);
    // Loop through each file
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory()) // If files is a directory, recursively call registerCommands
            registerEvents(path.join(dir, file));
        else {
            // Check if the file is a .js file
            if(file.endsWith(".js")) {
                let eventName = file.substring(0, file.indexOf(".js"));

                try {
                    let eventModule = require(path.join(__dirname, dir, file));
                    client.on(eventName, eventModule.bind(null, client));
                    //console.log(eventName + ' was registered.');
                }
                catch(err) {
                    console.log(err);
                }
                //console.log(client.commands);
            }
        }
    }
})()
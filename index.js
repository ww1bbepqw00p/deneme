const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "!";
let owner = "WhiteEvgen"; // Buraya kendi IDnizi yazın.

bot.on("ready", () => {
    bot.user.setGame(prefix + "destek | " + bot.guilds.size + " Sunucu") 
    console.log("Bağlandım!")   
});

bot.login("NDU5MDc4OTg3OTg2MTA4NDI2.Dgw-TA.xpSFZBENLlrI0ydhT4BVtlMvJO0")

bot.on("message", message => {

    if (message.content.toLowerCase() === prefix + "destek") {
        message.reply("**Yakında!**")
    }

});
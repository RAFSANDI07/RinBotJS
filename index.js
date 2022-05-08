const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTcxMjY2NDgyMzc1ODg0ODEw.GMHwK7.dKp0_yf8TkKgpRZS-Hu9DseeQJZypHcAx21ahE"


const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Login in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Guys")
    }
})

client.login(process.env.TOKEN)
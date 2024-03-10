require("dotenv").config()

const { Partials } = require("discord.js");
const MalingGorengan = require("./class/MalingGorengan");
const fs = require("fs")

const { Channel, Message, User, GuildMember, Reaction, GuildScheduledEvent, ThreadMember } = Partials

const client = new MalingGorengan({
  intents: 3276799,
  partials: [Channel, Message, User, GuildMember, Reaction, GuildScheduledEvent, ThreadMember],
})

const handlers = fs.readdirSync("handlers")

handlers.forEach(handler => {
  require(`./handlers/${handler}`)(client)
})

client.login(process.env.DISCORD_TOKEN)

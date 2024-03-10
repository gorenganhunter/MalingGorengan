const { ActivityType, Events } = require("discord.js");
const MalingGorengan = require("../class/MalingGorengan");

/** @type {import("../lib/type/event").Event<Events.ClientReady>} */
const ready = {
  name: Events.ClientReady,
  once: true,

  /** @param {MalingGorengan} client */
  exec(client) {
    console.log(`Berhasil login sebagai ${client.user.tag}`)
    
    client.user.setActivity({
      type: ActivityType.Watching,
      name: "Loplep hasunosora batch sub indo"
    })

    client.application.commands.set([...client.commands.map(cmd => cmd.data), ...client.contexts.map(cmd => cmd.data)])
    console.log(`Berhasil register ${client.commands.size} slash command`)
    console.log(`Berhasil register ${client.contexts.size} context`)
  }
}

module.exports = ready

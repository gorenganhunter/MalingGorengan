const MalingGorengan = require("../class/MalingGorengan");
const fs = require("fs")

/** @param {MalingGorengan} client */
module.exports = client => {
  const files = fs.readdirSync(__dirname + "/../events")
  let events = []

  files.forEach(file => {
    /** @type {import("../lib/type/event").Event} */
    const event = require(`../events/${file}`)

    if(event.once) client.once(event.name, (...args) => event.exec(...args, client))
    else client.on(event.name, (...args) => event.exec(...args, client))

    client.events.set(event.name, event)
    events.push({ Events: event.name })
  })

  console.table(events)
}

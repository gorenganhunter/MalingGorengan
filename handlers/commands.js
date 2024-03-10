const MalingGorengan = require("../class/MalingGorengan")
const fs = require("fs")

/** @param {MalingGorengan} client */
module.exports = client => {
  const files = fs.readdirSync(__dirname + "/../commands")
  let commands = []

  files.forEach(file => {
    /** @type {import('../commands/index.js').Command} */
    const cmd = require(`../commands/${file}`)

    client.commands.set(cmd.data.name, cmd)
    commands.push({ Commands: cmd.data.name })
  })

  console.table(commands)
}

const MalingGorengan = require("../class/MalingGorengan")
const fs = require("fs")

/** @param {MalingGorengan} client */
module.exports = client => {
  const files = fs.readdirSync(__dirname + "/../contexts")
  let contexts = []

  files.forEach(file => {
    /** @type {import('../commands/index.js').Command} */
    const ctx = require(`../contexts/${file}`)

    client.contexts.set(ctx.data.name, ctx)
    contexts.push({ Contexts: ctx.data.name })
  })

  console.table(contexts)
}

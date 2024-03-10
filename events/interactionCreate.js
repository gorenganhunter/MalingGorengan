const { Events } = require("discord.js");
const MalingGorengan = require("../class/MalingGorengan");

/** @type {import("../lib/type/event").Event<Events.InteractionCreate>} */
const interactionCreate = {
  name: Events.InteractionCreate,

  async exec(interaction) {
    /** @type {MalingGorengan} */
    const client = interaction.client

    /** @type {Collection<String, import("../lib/type/cmd").Command>} */
    let collection

    if(interaction.isChatInputCommand()) collection = client.commands
    if(interaction.isContextMenuCommand()) collection = client.contexts

    const cmd = collection.get(interaction.commandName)
    if(!cmd) return

    try {
      await cmd.exec(interaction, client)
    } catch (err) {
      if(interaction.deferred) await interaction.editReply("Error cik")
      await client.users.send("952514844089778208", `\`\`\`${err}\`\`\``)
      console.log(err)
    }
  }
}

module.exports = interactionCreate

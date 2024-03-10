const { ContextMenuCommandBuilder, ApplicationCommandType, AttachmentBuilder } = require("discord.js")

/** @type {import("../lib/type/cmd").Command} */
const remini = {
  data: new ContextMenuCommandBuilder()
    .setName("Remini")
    .setType(ApplicationCommandType.Message),

  async exec(interaction, client) {
    let msg = interaction.targetMessage

    const attachments = msg.attachments.filter(att => att.contentType.startsWith("image/"))
    if(attachments.size < 1) return await interaction.reply({
      content: "Tuh message gaada gambarnya njir mana coba yang mau gw proses woilah",
      ephemeral: true
    })
    
    await interaction.deferReply()
    
    let files = attachments.map(att => {
      return new AttachmentBuilder().setName("remini.jpeg").setFile(`https://ai-tools.replit.app/remini?url=${encodeURIComponent(att.url)}`)
    })
    
    await interaction.editReply({ files })
  }
}

module.exports = remini

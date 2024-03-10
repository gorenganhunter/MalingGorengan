const { default: axios } = require("axios")
const { ContextMenuCommandBuilder, ApplicationCommandType, AttachmentBuilder } = require("discord.js")

/** @type {import("../lib/type/cmd").Command} */
const anime = {
  data: new ContextMenuCommandBuilder()
    .setName("Image to Anime")
    .setType(ApplicationCommandType.Message),

  async exec(interaction, client) {
    let msg = interaction.targetMessage

    const attachments = msg.attachments.filter(att => att.contentType.startsWith("image/"))
    if(attachments.size < 1) return await interaction.reply({
      content: "Tuh message gaada gambarnya njir mana coba yang mau gw proses woilah",
      ephemeral: true
    })
    
    await interaction.deferReply()
    
    let files = await Promise.all(attachments.map(async att => {
      const response = await axios.get(`https://simoapi-aimirror.onrender.com/generate?imageUrl=${encodeURIComponent(att.url)}&modelNumber=1`)
      return new AttachmentBuilder().setName("anime.jpeg").setFile(response.data.imageUrl)
    }))
    
    await interaction.editReply({ files })
  }
}

module.exports = anime

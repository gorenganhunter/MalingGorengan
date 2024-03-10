const { SlashCommandBuilder, SlashCommandAttachmentOption, AttachmentBuilder } = require("discord.js");

/** @type  {import("../lib/type/cmd").Command} */
const remini = {
  data: new SlashCommandBuilder()
    .setName("remini")
    .setDescription("Enhance photo using remini")
    .addAttachmentOption(
      new SlashCommandAttachmentOption()
        .setName("photo")
        .setDescription("Pilih fotonya dulu")
        .setRequired(true)
    ),

  async exec(interaction, client) {
    const { options } = interaction

    const image = options.getAttachment("photo")
    
    if(!image.contentType.startsWith("image/")) return await interaction.reply({
      content: "Itu bukan image woy",
      ephemeral: true
    })

    await interaction.deferReply()

    await interaction.editReply({
      files: [new AttachmentBuilder().setName("remini.jpeg").setFile(`https://ai-tools.replit.app/remini?url=${encodeURIComponent(image.url)}`)]
    })
  }
}

module.exports = remini

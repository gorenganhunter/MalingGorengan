const { default: axios } = require("axios");
const { SlashCommandBuilder, SlashCommandStringOption, SlashCommandAttachmentOption, AttachmentBuilder } = require("discord.js");

/** @type {import("../lib/type/cmd").Command} */
const nijix = {
  data: new SlashCommandBuilder()
    .setName("nijix")
    .setDescription("Text to Image coy")
    .addStringOption(
      new SlashCommandStringOption()
        .setName("prompt")
        .setDescription("Pake nanya prompt nya lah")
        .setRequired(true)
    )
    .addStringOption(
      new SlashCommandStringOption()
        .setName("ratio")
        .setDescription("Rasio gambar nya. Btw defaultnya 1:1")
    )
    .addAttachmentOption(
      new SlashCommandAttachmentOption()
        .setName("image")
        .setDescription("Kalo mau masukin gambar sini")
    ),
  
  async exec(interaction, client) {
    const { options } = interaction

    const prompt = options.getString("prompt")
    const ratio = options.getString("ratio") || "1:1"
    const attachment = options.getAttachment("image")

    const pattern = /[0-9]\:[0-9]/
    if(!pattern.test(ratio)) ratio = "1:1"

    let url = `https://project-niji.onrender.com/api/generate?prompt=${encodeURIComponent(prompt)}.&aspectRatio=${ratio}&apikey=rehat&key=siam`
    if(attachment && attachment.contentType.startsWith("image/")) url += `&imageUrl=${attachment.url}`

    await interaction.deferReply()

    const response = await axios.post(url)
    
    await interaction.editReply({
      files: [new AttachmentBuilder().setName("niji.jpg").setFile(response.data.url)]
    })
  }
}

module.exports = nijix

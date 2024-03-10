const { default: axios } = require("axios");
const { SlashCommandBuilder, SlashCommandAttachmentOption, SlashCommandNumberOption, AttachmentBuilder } = require("discord.js");

/** @type {import("../lib/type/cmd").Command} */
const anime = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Image to anime")
    .addAttachmentOption(
      new SlashCommandAttachmentOption()
        .setName("image")
        .setDescription("Gambar yang mau dijadiin anime")
        .setRequired(true)
    )
    .addNumberOption(
      new SlashCommandNumberOption()
        .setName("model")
        .setDescription("Pilih model yang ingin digunakan")
        .setRequired(true)
        .addChoices( 
          {
            name: "1 - Anime Premium",
            value: 1
          },
          {
            name: "2 - Cartoon Premium",
            value: 2
          },
          {
            name: "3 - Anime Style: Maid Outfit",
            value: 3
          },
          {
            name: "4 - Anime Style: Beach Babe",
            value: 4
          },
          {
            name: "5 - Anime Style: Sweet Fantasy",
            value: 5
          },
          {
            name: "6 - Anime Style: Love Story Comic",
            value: 6
          },
          {
            name: "7 - Anime Style: High School Memories",
            value: 7
          },
          {
            name: "8 - Anime Style: Festive Christmas",
            value: 8
          },
          {
            name: "9 - Anime Art: Pirate Adventure ( One Piece )",
            value: 9
          },
          {
            name: "10 - Anime Art: Pop Star Sensation ( Oshi no Ko )",
            value: 10
          },
          {
            name: "11 - Anime Art: Ninja Legacy ( Naruto )",
            value: 11
          },
          {
            name: "12 - Anime Art: Super Warriors ( DBZ )",
            value: 12
          },
          {
            name: "13 - Anime Art: Dark Notebook ( Death Note )",
            value: 13
          },
          {
            name: "14 - Anime Art: Eternal Battle ( Bleach )",
            value: 14
          },
          {
            name: "15 - Anime Art: Wings of Destiny ( AOT )",
            value: 15
          },
          {
            name: "16 - Anime Art: Mystic Magic (Jujutsu Kaisen)",
            value: 16
          },
          {
            name: "17 - Anime Art: Tennis Prodigy (ThePrince of Tennis)",
            value: 17
          },
          {
            name: "18 - Anime Art: Demon Slayer Chronicles (Demon Slayer)",
            value: 18
          },
          {
            name: "19 - Anime Art: Alchemical Adventures (Fullmetal Alchemist)",
            value: 19
          },
          {
            name: "20 - Anime Art: Heroic Future (My Hero Academia)",
            value: 20
          },
          {
            name: "21 - Anime Art: Prehistoric Quest (Dr Stone)",
            value: 21
          },
          {
            name: "22 - Anime Art: Court Clash (Haikyuu)",
            value: 22
          },
        )
    ),

  async exec(interaction, client) {
    const { options } = interaction

    const image = options.getAttachment("image")
    const model = options.getNumber("model")

    if(!image.contentType.startsWith("image/")) return await interaction.reply({
      content: "Itu bukan image woy",
      ephemeral: true
    })
    
    await interaction.deferReply()

    const response = await axios.get(`https://simoapi-aimirror.onrender.com/generate?imageUrl=${encodeURIComponent(image.url)}&modelNumber=${model}`)
    
    await interaction.editReply({
      files: [new AttachmentBuilder().setName("anime.jpeg").setFile(response.data.imageUrl)]
    })
  }
}

module.exports = anime

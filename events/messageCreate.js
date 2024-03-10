const { Events, userMention } = require("discord.js");
const MalingGorengan = require("../class/MalingGorengan");
const { default: axios } = require("axios");

/** @type {import("../lib/type/event").Event<import("discord.js").Events.MessageCreate>} */
const messageCreate = {
  name: Events.MessageCreate,

  async exec(msg) {
    /** @type {MalingGorengan} */
    const client = msg.client

    try {
      if (msg.author.bot || !msg.guild) return;
      if (!msg.content) return

      if (!(msg.mentions.members.has(client.user.id) && (msg.mentions.repliedUser?.equals(client.user) || msg.content.startsWith(userMention(client.user.id))))) return

      await msg.channel.sendTyping();

      const prompt = (msg.content.startsWith(userMention(client.user.id)) ? msg.cleanContent.replace(`@${msg.guild.members.me.nickname || client.user.username}`, "") : msg.cleanContent).trim() || "Halo"
 
      const response = await axios.get(`https://ai-tools.replit.app/gpt?prompt=${encodeURIComponent(prompt)}&uid=${msg.author.id}`)

      const gpt = response.data["gpt4"]

      await msg.reply(gpt)
    } catch (e) {
      await client.users.send("952514844089778208", `\`\`\`${e}\`\`\``)
      console.error(e);
    }
  }
}

module.exports = messageCreate

const { Client, Collection } = require("discord.js");

class MalingGorengan extends Client {
  /** @type {Collection<String, import("../lib/type/cmd").Command>} */
  commands = new Collection()

  /** @type {Collection<String, import("../lib/type/event").Event>} */
  events = new Collection()

  /** @type {Collection<String, import("../lib/type/cmd").Command>} */
  contexts = new Collection()
}

module.exports = MalingGorengan

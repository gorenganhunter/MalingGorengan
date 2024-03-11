const { Client, Collection } = require("discord.js");

class MalingGorengan extends Client {
  /** @type {Collection<String, import("../lib/type/cmd").Command>} */
  commands = new Collection()

  /** @type {Collection<String, import("../lib/type/event").Event>} */
  events = new Collection()

  /** @type {Collection<String, (import('../lib/type/cmd').MessageContext|import("../lib/type/cmd").UserContext)>} */
  contexts = new Collection()
}

module.exports = MalingGorengan

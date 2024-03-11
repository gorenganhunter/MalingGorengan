/**
 * @typedef {object} Command
 * @property {import('discord.js').RESTPostAPIChatInputApplicationCommandsJSONBody} data Data cmd nya
 * @property {(interaction: import("discord.js").ChatInputCommandInteraction, client: import("../../class/MalingGorengan")) => Promise<void> | void} exec Funtion yang mau dieksekusi
 */

/**
 * @typedef {object} MessageContext
 * @property {import('discord.js').RESTPostAPIContextMenuApplicationCommandsJSONBody} data Data context nya
 * @property {(interaction: import("discord.js").MessageContextMenuCommandInteraction, client: import("../../class/MalingGorengan")) => Promise<void> | void} exec Funtion yang mau dieksekusi
 */

/**
 * @typedef {object} UserContext
 * @property {import('discord.js').RESTPostAPIContextMenuApplicationCommandsJSONBody} data Data context nya
 * @property {(interaction: import("discord.js").UserContextMenuCommandInteraction, client: import("../../class/MalingGorengan")) => Promise<void> | void} exec Funtion yang mau dieksekusi
 */

module.exports = {}

/**
 * @template {keyof import('discord.js').ClientEvents} [T=keyof import('discord.js').ClientEvents]
 * @typedef {object} Event
 * @property {(...parameters: import('discord.js').ClientEvents[T]) => Promise<void> | void} exec Function yang bakal dieksekusi
 * @property {T} name Nama event yang mau dilisten
 * @property {boolean} [once] Apakah event hanya akan dilisten sekali saja
 */

const { Client } = require('discord.js');
const MalingGorengan = require('../../class/MalingGorengan');

module.exports = {}

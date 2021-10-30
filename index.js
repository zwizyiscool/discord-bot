const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"] 
});
module.exports = client;


client.slashCommands = new Collection();



require("./handler")(client);
require('dotenv').config()
client.login(process.env.token)
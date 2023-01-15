const { GatewayIntentBits } = require('discord.js');
module.exports = [
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans
];
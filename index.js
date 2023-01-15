global.absolutePath = __dirname;
const { Client, Collection } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
global.bot = new Client({ intents: require('./vendor/intents') });
global.allCommands = require('./constructors/constructorCommands');
global.allButtons = require('./constructors/constructorButtons');
global.allModals = require('./constructors/constructorModals');
require('./constructors/constructorApiMethods');

global.bot.once('ready', async () => {
	
	global.guild = global.bot.guilds.cache.get(`${config.discord.guild_id}`);
	console.log(`Бот ${global.bot.user.username} включен`);
});

global.bot.login(config.discord.token);
const fs = require('fs');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require(`${global.absolutePath}/config.json`);
module.exports = new class constructorCommands 
{
    commandObjects = {};
    constructor()
    {
        let commandDir = fs.readdirSync(`${global.absolutePath}/commands`);
        if(commandDir.length !== 0)
        {
            let commands = [];
            for(let key in commandDir)
            {
                let commandObject = require(`${global.absolutePath}/commands/${commandDir[key]}`);
                let commandData = commandObject.buildCommand();
                commands.push(commandData.toJSON());
                this.commandObjects[commandData.name] = commandObject;
            }
            const rest = new REST({ version: '10' }).setToken(config.discord.token);
            rest.put(Routes.applicationGuildCommands(config.discord.client_id, config.discord.guild_id), { body: commands })
                .then(() => console.log(`Команды успешно зарегистрированы, количество команд - ${commandDir.length}`))
                .catch(console.error);   
        }
        else console.log('Команды не зарегистрированы, их нет');
    }

    useMethodCommand(name, args) 
    {
        if(!name in this.commandObjects) throw `Команда ${name} не найдена`;
        try {
            this.commandObjects[name].handle(args);
        }
        catch(error) {
            console.log(`При выполнений функции ${name}, произошла ошибка:`, error);
        }
    }
}


const fs = require('fs');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require(`${global.absolutePath}/config.json`);

module.exports = new class constructorModals 
{
    modalObjects = {};
    constructor()
    {
        let modalsDir = fs.readdirSync(`${global.absolutePath}/modals`);
        if(modalsDir.length !== 0)
        {
            for(let key in modalsDir)
            {
                let modalObject = require(`${global.absolutePath}/modals/${modalsDir[key]}`);
                this.modalObjects[modalObject.name] = modalObject;
            }
            console.log(`Модальные окна успешно зарегистрированы, их количество ${modalsDir.length}`);
        }
        else console.log("Модальные окна не загружены, их 0");
    }

    useMethodModal(name, args)
    {
        try {
            this.modalObjects[name].handle(args);
        }
        catch(error) {
            console.log(`При выполнений функции ${name}, произошла ошибка:`, error);
        }
    }

    build(name)
    {
        try {
            return this.modalObjects[name].buildModal;
        }
        catch(error) {
            console.log(`При выполнений функции ${name}, произошла ошибка:`, error);
        }
    }
}
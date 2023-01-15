const fs = require('fs');
module.exports = new class constructorButtons 
{
    buttonsObjects = {};
    constructor()
    {
        let buttonsDir = fs.readdirSync(`${global.absolutePath}/buttons`);
        if(buttonsDir.length !== 0)
        {
            for(let key in buttonsDir)
            {
                let buttonObject = require(`${global.absolutePath}/buttons/${buttonsDir[key]}`);
                this.buttonsObjects[buttonObject.name] = buttonObject;
            }
            console.log(`Кнопки успешно зарегистрированы, их количество ${buttonsDir.length}`);
        }
    }

    useMethodButton(name, args)
    {
        try {
            this.buttonsObjects[name].handle(args);
        }
        catch(error) {
            console.log(`При выполнений функции ${name}, произошла ошибка:`, error);
        }
    }

    build(name)
    {
        try {
            return this.buttonsObjects[name].buildButton;
        }
        catch(error) {
            console.log(`При выполнений функции ${name}, произошла ошибка:`, error);
        }
    }
}
const fs = require('fs');
module.exports = new class constructorApiMethods
{
    constructor()
    {
        let methodsDir = fs.readdirSync(`${global.absolutePath}/methods`);
        if(methodsDir.length !== 0)
        {
            for(let key in methodsDir)
            {
                let method = require(`${global.absolutePath}/methods/${methodsDir[key]}`)
                global.bot.on(method.name, method.handle);
            }
        }
        console.log(`API методы успешно зарегистрированы, количество методов - ${methodsDir.length}`);    }
}
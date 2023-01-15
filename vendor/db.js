const config = require(`${global.absolutePath}/botconfig.json`);
const db = require('mysql2');
const connection = db.createPool(config.db).promise();

module.exports = connection;
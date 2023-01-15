const { SlashCommandBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require('discord.js');
const config = require(`${global.absolutePath}/config.json`);
module.exports = {
    buildCommand: () => new SlashCommandBuilder()
        .setName('openmodal')
        .setDescription('Регистрация'),
    handle: async (interaction) => {
		  await interaction.showModal(global.allModals.build('myModal'));
    },

}
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, TextInputStyle, TextInputBuilder, ModalBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
    buildModal: new ModalBuilder()
        .setCustomId('myModal')
        .setTitle('My Modal')
        .addComponents(
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                    .setCustomId('color')
                    .setLabel("My Color")
                    .setRequired(true)
                    .setMinLength(100)
                    .setMaxLength(4000)
                    .setStyle(TextInputStyle.Paragraph)
            ),
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                    .setCustomId('name')
                    .setLabel("My Name")
                    .setPlaceholder("Name or Surname")
                    .setStyle(TextInputStyle.Paragraph)
            )
        ),
    handle: async (interaction) => {
        interaction.reply({content: "Hello"})
    },
    name: 'myModal',
}
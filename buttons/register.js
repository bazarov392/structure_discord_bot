const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
module.exports = {
    buildButton: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('openModalReg')
                .setLabel('Зарегистрироваться')
                .setStyle(ButtonStyle.Success),
        ),
    handle: async (interaction) => {
        
        await interaction.deferReply({ ephemeral: true, content: "Загрузка..." });
        interaction.editReply({content: 'ок'});
    },
    name: 'openModalReg',
}
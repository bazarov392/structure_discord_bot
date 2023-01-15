module.exports = new class interactionCreate
{
    name = 'interactionCreate';
    async handle(interaction)
    {
        if (interaction.isChatInputCommand())
            global.allCommands.useMethodCommand(interaction.commandName, interaction);
        else if(interaction.isButton())
            global.allButtons.useMethodButton(interaction.customId, interaction);
        else if(interaction.isModalSubmit())
            global.allModals.useMethodModal(interaction.customId, interaction);
        else return;
    }
}
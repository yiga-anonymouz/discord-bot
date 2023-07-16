const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('GN')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('GN MF!');
	},
};
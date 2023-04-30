import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import type Command from '../types/command';

const command: Command = {
  command: new SlashCommandBuilder().setName('repeat').setDescription('Repeat the last command you entered!'),
  cmdNames: ['!!'],
  execute: async (interaction, bot) => {
    let userData = bot.users.get(interaction.user.id) // msg.author.id
    if (userData == undefined) return;
    if (userData['history'] == undefined) return;
    let length = userData['history'].length;
    await userData['history'][length-1].execute(interaction, bot);
  },
};

export default command;

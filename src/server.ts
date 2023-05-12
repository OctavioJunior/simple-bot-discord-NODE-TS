import { Client, IntentsBitField } from 'discord.js';
import { config } from 'dotenv';
// import register from './commands/commands-register';

config();
console.log('Bot sendo iniciado...');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} etá online!`);
});

client.on('messageCreate', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'soma') {
    const firstNumber = Number(interaction.options.get('valor_1')?.value);
    const secondNumber = Number(interaction.options.get('valor_2')?.value);
    const result = firstNumber + secondNumber;

    interaction.reply(
      `O resultado de ${firstNumber} + ${secondNumber} = ${result}`
    );
  }
});

// register();

client.login(process.env.BOT_TOKEN);

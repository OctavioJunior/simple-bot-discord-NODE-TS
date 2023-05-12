import axios from 'axios';
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
const personagemSW = async () => {
  try {
    const numberSorted = Math.floor(Math.random() * (83 - 1) + 1);
    const data = await axios.get(
      `https://swapi.dev/api/people/${numberSorted}`
    );
    return data.data.name;
  } catch (error) {
    console.log('error');
  }
};

client.on('ready', (c) => {
  console.log(`${c.user.tag} etá online!`);
});

// client.on('messageCreate', (msg) => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   }
// });

// client.on('interactionCreate', (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === 'soma') {
//     const firstNumber = Number(interaction.options.get('valor_1')?.value);
//     const secondNumber = Number(interaction.options.get('valor_2')?.value);
//     const result = firstNumber + secondNumber;

//     interaction.reply(
//       `O resultado de ${firstNumber} + ${secondNumber} = ${result}`
//     );
//   }
// });

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'swapi') {
    const name = await personagemSW();
    interaction.reply(name);
  }
});

// register();
client.login(process.env.BOT_TOKEN);

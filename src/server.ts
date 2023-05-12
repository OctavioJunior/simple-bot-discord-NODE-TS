import { Client, IntentsBitField } from 'discord.js';
import { config } from 'dotenv';

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
  console.log(msg.content);
});

client.on('messageCreate', (msg) => {
  if (msg.content === 'eu te amo') {
    msg.reply('eu também te amo');
  }
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.BOT_TOKEN);

import { ApplicationCommandOptionType, REST, Routes } from 'discord.js';
import { config } from 'dotenv';

config();

export const commands = [
  {
    name: 'soma',
    description: 'Soma de dois números!',
    options: [
      {
        name: 'valor_1',
        description: 'Digite o primeiro valor!',
        type: ApplicationCommandOptionType.Number,
        required: true
      },
      {
        name: 'valor_2',
        description: 'Digite o segundo valor!',
        type: ApplicationCommandOptionType.Number,
        required: true
      }
    ]
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN || '');

const register = async () => {
  try {
    console.log('Registrando comandos...');
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.BOT_ID || '',
        process.env.GUILD_ID || ''
      ),
      { body: commands }
    );

    console.log('Comandos registrados!!!');
  } catch (error) {
    console.log(`Houve um erro: ${error}`);
  }
};

export default register;

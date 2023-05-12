import bunyan from 'bunyan';
import BunyanFormat from 'bunyan-format';

const logger = bunyan.createLogger({
  name: 'bot-simples',
  streams: [
    {
      stream: BunyanFormat({ outputMode: 'long' })
    }
  ]
});

export default logger;

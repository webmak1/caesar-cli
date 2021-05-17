const { Command } = require('commander');
const caesarCipher = require('./cipher');
const caesarEncoder = require('./encoder');

const app = new Command();

app
  .storeOptionsAsProperties(false)
  .version('0.0.1')
  .requiredOption('-a, --action <type>', 'encode/decode')
  .option('-s, --shift <type>', 'shift')
  .option('-i, --input <type>', 'input')
  .option('-o, --output <type>', 'output')
  .action(
    () => {
      const { input, output, shift, action } = app.opts();
      caesarCipher.validate(input, shift, action);
      caesarEncoder(input, output, shift, action);
    }
  )
  .parse(process.argv);

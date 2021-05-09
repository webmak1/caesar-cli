const { Transform } = require('stream');
const caesarCipher = require('./cipher');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./errorHandler');

const updateStream = {
    read: input => {
        if (input) {
            const filePath = path.resolve(input);
            const readStream = fs.createReadStream(filePath, 'utf-8');

            readStream.on('error', function(error) {
                errorHandler('Input file doesn\'t exist', 9);
            });

            return readStream;
        } else
            return process.stdin;
    },
    transform: (shift, action) => {
        return new Transform ({
            transform(chunk, _encoding, callback) {
                this.push(caesarCipher.perform(chunk.toString('utf8'), shift, action));
                this.push('\n');
                callback();
            }
        })
    },
    write: output => {
        if (output) {
            const filePath = path.resolve(output);
            const writeStream = fs.createWriteStream(filePath, {flags: 'a'});

            writeStream.on('error', function(error) {
                errorHandler('Output file doesn\'t exist', 9);
            });

            return writeStream;
        } else
            return process.stdout;
    }
}

module.exports = updateStream;
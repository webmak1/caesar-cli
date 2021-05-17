const { pipeline } = require('stream');
const updateStream = require('./update-stream');
const errorHandler = require('./errorHandler');

const encoder = (input, output, shift, action) => {
    pipeline(
        updateStream.read(input),
        updateStream.transform(shift, action),
        updateStream.write(output),
        error => {
            if (error)
                errorHandler(error, 9);
        }
    );
  }

  module.exports = encoder;
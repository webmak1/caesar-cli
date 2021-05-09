const { pipeline, Transform } = require('stream');

const input = process.stdin;
const output = process.stdout;

const transform = new Transform ({
    transform(chunk, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

pipeline(
    input,
    transform,
    output,
    error => {
      if (error)
        errorHandler(error, 9);
    }
);

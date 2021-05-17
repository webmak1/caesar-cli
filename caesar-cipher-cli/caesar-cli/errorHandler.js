const errorHandler = (error, number) => {
    process.stderr.write(`${error}\n`);
    process.exit(number);
}

module.exports = errorHandler;
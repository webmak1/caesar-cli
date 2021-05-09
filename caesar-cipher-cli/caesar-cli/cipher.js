const errorHandler = require('./errorHandler');

const cipher = {
    base: 'abcdefghijklmnopqrstuvwxyz',
    validate: (input, shift, action) => {
        if (!(action === 'encode' || action === 'decode')) {
            const error = new Error(`${action} is not a valid action parameter. Use "encode/decode" instead`)
            errorHandler(error, 3);
        }
        if (!shift) {
            const error = new Error(`Shift parameter is required`)
            errorHandler(error, 3);
        }
    },
    perform: (string, shift, action) => {
        shift = action === 'encode' ? shift * 1 : shift * -1;
        return string.split('').map(char => {
            if (cipher.base.includes(char)) {
                let index = (cipher.base.indexOf(char) + shift) % cipher.base.length;
                index = index < 0 ? cipher.base.length + index : index;
                return cipher.base[index];
            }
            if (cipher.base.toUpperCase().includes(char)) {
                let index = (cipher.base.toUpperCase().indexOf(char) + shift) % cipher.base.length;
                index = index < 0 ? cipher.base.length + index : index;
                return cipher.base.toUpperCase()[index];
            }
            return char;
        }).join('');
    }
}

module.exports = cipher;
const logol = require('./dist');

module.exports = function run() {
    logol.log('test log (after overwrite)', { a: 123 });
}

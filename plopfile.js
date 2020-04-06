const documentGenerator = require('./templates/document');

module.exports = function (plop) {
  plop.setGenerator('document', documentGenerator);
};

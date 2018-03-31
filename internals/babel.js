const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = () => {
  const content = readFileSync(join(__dirname, '../.babelrc'));
  try {
    return JSON.parse(content);
  } catch (err) {
    return {};
  }
};

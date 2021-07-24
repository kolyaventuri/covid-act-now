const dotenv = require('dotenv');
const base = require('./ava.base.cjs');

dotenv.config();

module.exports = {
  ...base,
  environmentVariables: {
    COVID_ACT_NOW_KEY: process.env.COVID_ACT_NOW_KEY
  }
}

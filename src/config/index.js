const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const jwtConfig = require('./jwt');
const jwtPrivateKey = fs.readFileSync('jwtRS256.key');
const jwtPublicKey = fs.readFileSync('jwtRS256.key.pub');

module.exports = {
  jwt: {
    config: jwtConfig,
    privateKey: jwtPrivateKey,
    publicKey: jwtPublicKey
  },
  crypt: {
    secret: process.env.SECRET_KEY,
  },
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production'
};

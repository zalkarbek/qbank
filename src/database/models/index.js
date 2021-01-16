const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../../config/database')[env]

const db = require('knex')({
    ...dbConfig
})

module.exports = db
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const basename = path.basename(__filename);
const knexConfig = require('../config/knex')[env];
const sequelizeConfig = require('../config/sequelize')[env];
const QUERY = require('./const/queries');

const db = {
    sequelizeModels: {}
};
const departmentDB = {};

const knex = require('knex')({
    ...knexConfig
})

if (env) {
    const database = sequelizeConfig.database
    const username = sequelizeConfig.username
    const password = sequelizeConfig.password
    const host = sequelizeConfig.host
    const dialect = sequelizeConfig.dialect

    db.sequelize = new Sequelize(database, username, password, {
        host,
        dialect: 'mysql'
    });
}

console.log(db.sequelize)

fs
    .readdirSync(__dirname + '/models')
    .filter(file => {
        return (file.indexOf('.') !== 0)
            && (file !== basename)
            && (file !== 'baseFields')
            && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = db.sequelize['import'](path.join(__dirname + '/models', file));
        db.sequelizeModels[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db.sequelizeModels[modelName].associate) {
        db.sequelizeModels[modelName].associate(db.sequelizeModels);
    }
});

db.departmentDB = departmentDB;
db.knex = knex;
db.Sequelize = Sequelize;
db.QUERY = QUERY;
db.Op = Sequelize.Op;

module.exports = db;

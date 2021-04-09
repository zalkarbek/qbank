const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const basename = path.basename(__filename);
const knex = require('knex')
const knexConfig = require('../config/knex')[env];
const sequelizeConfig = require('../config/sequelize')[env];
const QUERY = require('./const/queries');

const db = {
    sequelize: {},
    sequelizeModels: {},
    knex: {},
    departmentsDBLists: {},
    Sequelize,
    Op: Sequelize.Op,
    QUERY
};

db.knex = knex({
    ...knexConfig
})

db.knexBuilder = knex

db.knexChange = async function (dconfig) {
    db.knex = knex( {
        client: dconfig.dialect,
        connection: {
            host: dconfig.host,
            port: dconfig.port,
            user: dconfig.username,
            password: dconfig.password,
            database: dconfig.database
        }
    })
}


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

fs
    .readdirSync(__dirname + '\\models')
    .filter(file => {
        return (file.indexOf('.') !== 0)
            && (file !== basename)
            && (file !== 'baseFields')
            && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const modelBuilder = require(path.join(__dirname + '\\models', file));
        const model = modelBuilder(db.sequelize, db.Sequelize.DataTypes);
        db.sequelizeModels[model.name] = model;
    });

Object.keys(db.sequelizeModels).forEach(modelName => {
    if (db.sequelizeModels[modelName].associate) {
        db.sequelizeModels[modelName].associate(db.sequelizeModels);
    }
});

module.exports = db;

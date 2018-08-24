const promise = require('bluebird');


const initOptions = {
    promiseLib: promise 
};

const config = {
    host: 'localhost',
    port: 3000,
    database: 'music2',
    user: 'postgres'
};

const pgp = require('pg-promise')(initOptions);

const db = pgp(config);

module.exports = db;
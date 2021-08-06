import { Sequelize } from 'sequelize';

const dataBase = process.env.DATABASE; 
const user = process.env.USER; 
const pass = process.env.PASS; 
const host = process.env.HOST; 

const db = new Sequelize(dataBase, user, pass, {
    host: host,
    dialect: 'mysql',
    // logging: false,
});

export default db;
import Sequelize from 'sequelize';
import configs from '../config/config.json';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

const db = {
  Expense: sequelize.import('./expense')
};

db.sequelize = sequelize;

export default db;

import Sequelize from 'sequelize';
import configs from '../config/config'

const { username, password, database, host, dialect } = configs.development;
const sequelize = new Sequelize(database, username, password, { host, dialect });

const db = {
  Expense: sequelize.import('./expense')
};

db.sequelize = sequelize;

export default db;

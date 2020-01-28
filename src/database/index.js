import Sequelize from 'sequelize';

import User from '../app/models/User';
import Provider from '../app/models/Provider';
import Address from '../app/models/Address';

import databaseConfig from '../config/database';

const models = [User, Provider, Address];
class Database {
  constructor() {
    this.init();
  }

  init() {
    /**
     * connection with database
     */
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

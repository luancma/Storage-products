import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    // Acessing the value init of Model
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

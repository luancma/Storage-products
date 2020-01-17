import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // Acessing the value init of Model
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

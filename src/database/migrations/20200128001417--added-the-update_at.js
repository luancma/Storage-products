'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('addresses', 'updated_at', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('addresses', 'updated_at');
  },
};

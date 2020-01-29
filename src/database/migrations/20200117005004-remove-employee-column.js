'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('users', 'employee')]);
  },

  down: (queryInterface, Sequelize) => {},
};

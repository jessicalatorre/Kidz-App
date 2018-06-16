'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'Cow',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'Duck',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'Hose',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'Goat',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'Goat',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },
}
  
  
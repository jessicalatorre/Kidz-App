'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'cow',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'duck',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'horse',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'goat',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sessions', [{
      UserID : 1,
      ObjectName : 'goat',
      IsCorrect : true,
      createdAt : new Date(),
      updatedAt : new Date(),
      
    }], {});
  },
}
  
  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var sessions = sequelize.define('sessions', {
    userID: DataTypes.INTEGER,
    objectName: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN
    
  }, {});
  sessions.associate = function(models) {
    // associations can be defined here
  };
  return sessions;
};
module.exports = (sequelize, DataTypes) => {
  const schema = sequelize.define('userInRoles', {

    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: null
    },

    role_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: null
    },

  }, {
    tableName: 'users_in_roles',
    modelName: 'userInRoles',
    timestamps: false
  });

  schema.associate = (models) => {
    // -- associations can be defined here
  };

  return schema;
};

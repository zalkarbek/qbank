module.exports = (sequelize, DataTypes) => {
  const schema = sequelize.define('user', {

    name_u: {
      type: DataTypes.STRING(250),
      allowNull: true
    },

    login: {
      type: DataTypes.STRING(250),
      allowNull: true
    },

    password: {
      type:DataTypes.STRING(250),
      allowNull: false
    },

    access_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    type: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'web'
    },

  }, {
    tableName: 'users',
    modelName: 'user',
    timestamps: false
  });

  schema.associate = (models) => {
    // associations can be defined here
    schema.belongsToMany(models.role, {
      through: 'users_in_roles',
      foreignKey: 'user_id',
      otherKey: 'role_id'
    });
  };

  return schema;
};

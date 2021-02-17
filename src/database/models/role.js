module.exports = (sequelize, DataTypes) => {
  const schema = sequelize.define('role', {

    role_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    role_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },

    role_priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

  }, {
    tableName: 'roles',
    modelName: 'role',
    timestamps: false
  });

  schema.associate = (models) => {
    // -- associations can be defined here
    schema.belongsToMany(models.user, {
      through: 'users_in_roles',
      foreignKey: 'role_id',
      otherKey: 'user_id'
    });
  };

  return schema;
};

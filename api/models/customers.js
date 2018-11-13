const customers = (sequelize, DataTypes) => {
  return sequelize.define("customers", {
    name_customer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  });
};
module.exports = customers;

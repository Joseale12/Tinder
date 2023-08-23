//
const { DataTypes } = require("sequelize");
//⚠ SE EXPORTA UNA FUNCIÓN A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ

module.exports = (sequelize) => {
  sequelize.define(
    "Quotation",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserQuotation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AmountHour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PriceHour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Total: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
};
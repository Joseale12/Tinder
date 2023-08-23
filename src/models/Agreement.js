//
const { DataTypes } = require("sequelize");
//⚠ SE EXPORTA UNA FUNCIÓN A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ

module.exports = (sequelize) => {
  sequelize.define(
    "Agreement",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Advance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AdvanceDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      Day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Hour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
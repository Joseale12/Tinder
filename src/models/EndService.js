//
const { DataTypes } = require("sequelize");
//⚠ SE EXPORTA UNA FUNCIÓN A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ

module.exports = (sequelize) => {
  sequelize.define(
    "EndService",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      PendingPayable: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Finalized: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      ServiceRating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PendingPayableDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
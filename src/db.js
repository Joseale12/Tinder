const { Sequelize } = require("sequelize");

const AgreementModel = require("./models/Agreement");
const EndServiceModel = require("./models/EndService");
const QuotationModel = require("./models/Quotation");
const UserTinderModel = require("./models/UserTinder");


// ⚠ IMPORTO LA FUNCION DEL MODELO PARA SINCRONIZAR Y EVITAR MULTIPLES NEW SEQUELIZE EN CADA ARCHIVO

/* VARIABLES DE ENTORNO */
const USER_DB = "postgres";
const PASS_DB = "Colombia.9";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "Tinder";

/* Inicio una instancia de sequelize y conecto con la base de datos */
const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
  {
    logging: false, // cambiar a true para ver las query que se ejecutan desde la consola
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

/* Aquí ejecuto la función importada de cada modelo y paso sequelize como argumento */
AgreementModel(sequelize);
EndServiceModel(sequelize);
QuotationModel(sequelize);
UserTinderModel(sequelize);

/* ¿como me doy cuenta si se conectaron los modelos correctamente? */
/* Aqui tenemos los modelos guardados luego de sincronizarlos */
console.log(sequelize.models);

/* Hacemos un destructuring y podemos hacer las relaciones */
const {  Agreement,EndService, Quotation, UserTinder } = sequelize.models;
/* aca van las relaciones */
/* Relacion uno a muchos donde A = Category B= Product */

UserTinder.hasMany(Quotation);
Agreement.hasMany(EndService);
Quotation.hasOne(Agreement);
EndService.hasOne(Agreement);

/* Exporto sequelize y modelos */
module.exports = { sequelize, ...sequelize.models };

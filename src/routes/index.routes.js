const { Router } = require("express");
const router = Router();
const agreementRoutes = require("./Agreement.routes");
const endServiceRoutes = require("./EndService.routes");
const quotationRoutes = require("./Quotation.routes");
const userTinderRoutes = require("./UserTinder.routes");

/* GET DE EJEMPLO  localhost:3000/   */ 
router.get("/", (req, res) => {
  res.send("GET de prueba / sola ");
});

/*definimos los endpoints en secciones */
router.use("/agreement", agreementRoutes);
router.use("/endservice", endServiceRoutes);
router.use("/quotation", quotationRoutes);
router.use("/usertinder", userTinderRoutes);

module.exports = router;

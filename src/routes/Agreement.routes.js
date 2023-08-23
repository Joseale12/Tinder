//
const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { Agreement } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allAgreement = await Agreement.findAll();

    res.status(200).json(allAgreement);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los acuerdos");
  }
});

router.post("/", async (req, res) => {
  try {
    let newAgreement = req.body; // {title:"string"}
    await Agreement.create(newAgreement);
    res.status(200).json("Acuerdo creado correctamente");
  } catch (error) {
    res.status(400).send("Error al crear el acuerdo");
  }
});

module.exports = router;
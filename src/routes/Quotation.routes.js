//
const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { Quotation } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allQuotation = await Quotation.findAll();

    res.status(200).json(allQuotation);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando las cotizaciones");
  }
});

router.post("/", async (req, res) => {
  try {
    let newQuotation = req.body; // {title:"string"}
    await Quotation.create(newQuotation);
    res.status(200).json("Cotizacion  creada correctamente");
  } catch (error) {
    res.status(400).send("Error al crear la cotizacion");
  }
});

module.exports = router;
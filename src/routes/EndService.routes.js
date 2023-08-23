//
const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { EndService } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allService = await EndService.findAll();

    res.status(200).json(allService);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los servicios finalizados");
  }
});

router.post("/", async (req, res) => {
  try {
    let newService = req.body; // {title:"string"}
    await EndServicet.create(newService);
    res.status(200).json("Servicio finalizado fue creado correctamente");
  } catch (error) {
    res.status(400).send("Error al crear el servicio finalizado");
  }
});

module.exports = router;
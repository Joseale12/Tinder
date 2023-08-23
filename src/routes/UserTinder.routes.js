//
const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { UserTinder } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allUserTinder = await UserTinder.findAll();

    res.status(200).json(allUserTinder);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los usuarios de Tinder");
  }
});

router.post("/", async (req, res) => {
  try {
    let newUserTinder = req.body; // {title:"string"}
    await UserTinder.create(newUserTinder);
    res.status(200).json("El usuario fue creado correctamente");
  } catch (error) {
    res.status(400).send("Error al crear el usuario");
  }
});

module.exports = router;
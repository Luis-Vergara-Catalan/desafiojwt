const express = require("express");
const router = express.Router();
const {
  registrar,
  login,
  obtener,
} = require("../controllers/usuariosController");
const verificar = require("../middlewares/auth");

router.post("/usuarios", registrar);
router.post("/login", login);
router.get("/usuarios", verificar, obtener);

module.exports = router;
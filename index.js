const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usuariosRoutes = require("./routes/usuarios");
const logger = require("./middlewares/logger");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/", usuariosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});

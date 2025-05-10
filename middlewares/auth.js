const jwt = require("jsonwebtoken");
require("dotenv").config();

const verificar = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Token no proporcionado");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.email = decoded.email;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};

module.exports = verificar;
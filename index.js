const { pool } = require("./db.js");
const express = require("express");
const app = express();

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS Result");

  res.json(result[0]);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

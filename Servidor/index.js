const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://kensei:<maxiPRO123>@kensei.hx9sgyt.mongodb.net/test/CMR_juan?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("conectado a la Base de Datos");
  })
  .catch(function (err) {
    console.log(err);
  });

const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  fecha: Date,
  estado: String,
  medio: String,
});

const Contacto = mongoose.model("Contacto", contactoSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/guardar-contacto", async (req, res) => {
  const { nombre, correo, fecha, estado, medio } = req.body;

  try {
    const contacto = new Contacto({
      nombre,
      correo,
      fecha,
      estado,
      medio,
    });

    await contacto.save();

    res.send("Registro exitoso 😀");
  } catch (error) {
    console.log(error);
    res.send("Error al guardar el contacto 😞");
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

const form = document.querySelector("#formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#correo").value;
  const fecha = document.querySelector("#fecha").value;
  const estado = document.querySelector("#estado").value;
  const medio = document.querySelector("#medio").value;
});

fetch("/guardar-contacto", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `nombre=${nombre}&correo=${correo}&fecha=${fecha}&estado=${estado}&medio=${medio}`,
})
  .then((response) => response.text())
  .then((data) => {
    console.log(data); 
    
    const mensaje = document.querySelector("#mensaje");
    if (data.includes("éxito")) {
      mensaje.textContent = "Registro exitoso 😀";
    }
  });

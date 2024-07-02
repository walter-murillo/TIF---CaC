// src/app.js
// Iniciamos el server. Utiliza el modulo "movieRoutes"

const express = require('express');
const movieRoutes = require('../routes/movieRoutes');
const app = express();

app.get("/", (req, res) => {
    res.send("Trabajo Integrador Final de CaC - Fullstack Node.js!!")
})

app.use(express.json());
app.use('/movies', movieRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`)
});
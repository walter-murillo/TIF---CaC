// src/app.js
// Iniciamos el server. Utiliza el modulo "movieRoutes"

const express = require('express');
const movieRoutes = require('../routes/movieRoutes');
const app = express();

app.use(express.json());
app.use('/movies', movieRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`)
});
// src/controllers/movieController.js
// Iniciamos el controlador; hará el tratamiento de la informacion.

const db = require('../db/db'); // ==> El objeto db posee los metodos para conectar con la base de datos; es la conexion.

//getAllMovies: devolverá todas las peliculas cargadas en la base de datos
const getAllMovies = (req, res) => {
    const sql = 'SELECT * FROM movies'; // Este string se usara en la base de datos.
    db.query(sql, (err, results) =>{
        if (err) throw err;
        res.json(results);
    });
};
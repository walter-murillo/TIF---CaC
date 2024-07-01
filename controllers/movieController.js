// src/controllers/movieController.js
// Iniciamos el controlador; hará el tratamiento de la informacion.

const { create } = require('domain');
const db = require('../db/db'); // ==> El objeto db posee los metodos para conectar con la base de datos; es la conexion.

//getAllMovies: devolverá todas las peliculas cargadas en la base de datos
const getAllMovies = (req, res) => {
    const sql = 'SELECT * FROM peliculas'; // Este string se usara en la base de datos.
    db.query(sql, (err, results) =>{
        if (err) throw err;
        res.json(results);
    });
};

//getMovieByID: buscará y devolverá de la base de datos la pelicula cuyo ID se especifique en la busqueda
const getMovieByID = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM peliculas WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//createMovie: realiza el alta de una pelicula y la inserta en la base de datos
const createMovie = (req, res) => {
    const { titulo, director, anio } = req.body;
    const sql = 'INSERT INTO peliculas (titulo, director, anio) VALUES (?, ?, ?)';
    db.query(sql, [titulo, director, anio], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Pelicula creada con éxito!', movieId: result.insertId});
    });
};

//updateMovie: realiza modificaciones en la base de datos por medio del ID de la pelicula
const updateMovie = (req, res) => {
    const { id } = req.params;
    const { titulo, director, anio } = req.body;
    const sql = 'UPDATE peliculas SET titulo = ?, director = ?, anio = ? WHERE id = ?';
    db.query(sql, [titulo, director, anio, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Datos de la pelicula actualizados'});
    });
};

//deleteMovie: realiza el borrado fisico de recursos de la base de datos mediante un ID
const deleteMovie = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM peliculas WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Pelicula borrada de la base de datos!'});
    });
};

module.exports = {
    getAllMovies,
    getMovieByID,
    createMovie,
    updateMovie,
    deleteMovie
};
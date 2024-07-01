// src/controllers/movieController.js
// Iniciamos el controlador; hará el tratamiento de la informacion.

const { create } = require('domain');
const db = require('../db/db'); // ==> El objeto db posee los metodos para conectar con la base de datos; es la conexion.

//getAllMovies: devolverá todas las peliculas cargadas en la base de datos
const getAllMovies = (req, res) => {
    const sql = 'SELECT * FROM movies'; // Este string se usara en la base de datos.
    db.query(sql, (err, results) =>{
        if (err) throw err;
        res.json(results);
    });
};

//getMovieByID: buscará y devolverá de la base de datos la pelicula cuyo ID se especifique en la busqueda
const getMovieByID = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM movies WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//createMovie: realiza el alta de una pelicula y la inserta en la base de datos
const createMovie = (req, res) => {
    const { title, director, year } = req.body;
    const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?)';
    db.query(sql, [title, director, year], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Pelicula creada con éxito!', movieId: result.insertId});
    });
};

//updateMovie: realiza modificaciones en la base de datos por medio del ID de la pelicula
const updateMovie = (req, res) => {
    const { id } = req.params;
    const { title, director, year } = req.body;
    const sql = 'UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?';
    db.query(sql, [title, director, year, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Datos de la pelicula actualizados'});
    });
};

//deleteMovie: realiza el borrado fisico de recursos de la base de datos mediante un ID
const deleteMovie = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM movies WHERE id = ?';
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
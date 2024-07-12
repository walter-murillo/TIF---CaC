// src/controllers/movieController.js
// Iniciamos el controlador; hará el tratamiento de la informacion.

const { create } = require('domain');
const db = require('../db/db'); // ==> El objeto db posee los metodos para conectar con la base de datos; es la conexion.

//getAllMovies: devolverá todas las peliculas cargadas en la base de datos
const getAllMovies = (req, res) => {
    const sql = `
        SELECT p.id, p.titulo, p.anio, d.apellido, d.nombre, g.genero 
        FROM peliculas p JOIN directores d ON p.id_director = d.id 
        JOIN genero g ON p.id_genero = g.id 
        GROUP BY p.id;`; // Este string se usara en la base de datos.
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

//getMovieByID: buscará y devolverá de la base de datos la pelicula cuyo ID se especifique en la busqueda
const getMovieByID = (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT p.id, p.titulo, p.anio, p.id_director, p.id_genero, p.id_rangoEdad, d.apellido, d.nombre, g.genero 
        FROM peliculas p JOIN directores d ON p.id_director = d.id 
        JOIN genero g ON p.id_genero = g.id 
        GROUP BY p.id
        WHERE id = ?;`;
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//createMovie: realiza el alta de una pelicula y la inserta en la base de datos
const createMovie = (req, res) => {
    const { titulo, id_director, anio, id_genero, id_rangoEdad } = req.body;
    const sql = 'INSERT INTO peliculas (titulo, id_director, anio, id_genero, id_rangoEdad) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [titulo, id_director, anio, id_genero, id_rangoEdad], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Pelicula creada con éxito!', movieId: result.insertId });
    });
};

//updateMovie: realiza modificaciones en la base de datos por medio del ID de la pelicula
const updateMovie = (req, res) => {
    const { id } = req.params;
    const { titulo, id_director, anio, id_genero, id_rangoEdad } = req.body;
    let sql = 'UPDATE peliculas SET';
    const params = [];
    // Condicionales. Cuando la consulta no recibe parametros que cambian los datos de un campo, los deja como estan.
    if (titulo) { // Si recibe un valor "titulo"...
        sql += ' titulo = ?,'; // Concatena el string a la variable "sql" que contiene la query que se le dará a la base de datos
        params.push(titulo); // Agrega los argumentos al array de parametros 
    }
    if (id_director) {
        sql += ' id_director = ?,';
        params.push(id_director);
    }
    if (anio) {
        sql += ' anio = ?,';
        params.push(anio);
    }
    if (id_genero) {
        sql += ' id_genero = ?,';
        params.push(id_genero);
    }
    if (id_rangoEdad) {
        sql += ' id_rangoEdad = ?,';
        params.push(id_rangoEdad);
    }

    // Elimina la coma final si hay campos afectados
    if (params.length > 0) { // Si el array de los parametros tiene datos (mayor a 0)...
        sql = sql.slice(0, -1); // ... eliminamos la ultima coma "," de la concatenacion en la query que se le manda a la base de datos mediante el metodo "slice"
        sql += ' WHERE id = ?'; // Agregamos a la query el destino de la modificacion por parametro ID
        params.push(id); // Pusheamos el ID al array de parametros
    } else {
        // Si no hay campos afectados, no se realiza ninguna actualización
        res.json({ message: 'No se proporcionaron datos para actualizar' });
        return;
    }

    db.query(sql, params, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Datos de la película actualizados' });
    });
};

//deleteMovie: realiza el borrado fisico de recursos de la base de datos mediante un ID
const deleteMovie = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM peliculas WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Pelicula borrada de la base de datos!' });
    });
};

module.exports = {
    getAllMovies,
    getMovieByID,
    createMovie,
    updateMovie,
    deleteMovie
};
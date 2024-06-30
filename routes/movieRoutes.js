// src/routes/movieRoutes.js
// Iniciamos el router con los metodos especificos para cada opción

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


// Aca declaramos todos los metodos CRUD
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieByID);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

// Exportamos el modulo
module.exports = router;
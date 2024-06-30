// src/db/db.js
// En este archivo se creará el objeto que conectará con la base de datos utilizando el objeto mysql provisto en el modulo mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos.');
});

module.exports = connection;
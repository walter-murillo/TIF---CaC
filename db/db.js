// src/db/db.js
// En este archivo se creará el objeto que conectará con la base de datos utilizando el objeto mysql provisto en el modulo mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-db-movies.alwaysdata.net',
    user: 'db-movies_walter',
    password: 'murillo36946994',
    database: 'db-movies_test'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos.');

    connection.query('SELECT * FROM peliculas', (err, results) => {
        if (err) {
            console.error('Error creando base de datos', err);
            return;
        }
        console.log('Base de datos asegurada');

        connection.changeUser({ database: 'db-movies_test' }, (err) => {
            if (err) {
                console.error('Error cambiando a DB "movies".', err);
                return;
            }
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS peliculas (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    titulo VARCHAR(255) NOT NULL,
                    anio INT NOT NULL,
                    id_director INT,
                    id_genero INT
                );
            `;
            connection.query(createTableQuery, (err, results) => {
                if (err) {
                    console.error('Error creando tabla:', err);
                    return;
                }
                console.log('Tabla asegurada.');
            });
        });
    });
});

module.exports = connection;
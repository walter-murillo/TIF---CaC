/* Creando la base de datos
*/
CREATE DATABASE IF NOT EXISTS `db-movies_test`;
USE `db-movies_test`;

/* Creando tablas principales
*/

CREATE TABLE IF NOT EXISTS `directores` (
	id int auto_increment primary key,
    nombre varchar(255) not null,
    apellido varchar(255) not null
);

CREATE TABLE IF NOT EXISTS `genero`(
	id int auto_increment primary key,
    genero varchar(255) not null
);

CREATE TABLE IF NOT EXISTS `rangoEdad`(
	id int auto_increment primary key,
    rango varchar(255) not null
);

CREATE TABLE IF NOT EXISTS `peliculas` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    anio INT NOT NULL,
    id_director INT,
    id_genero INT,
    id_rangoEdad INT,
    FOREIGN KEY (id_director)
        REFERENCES directores (id),
    FOREIGN KEY (id_genero)
        REFERENCES genero (id),
    FOREIGN KEY (id_rangoEdad)
        REFERENCES rangoEdad (id)
);

/* Llenamos las tablas con algunos datos
*/
INSERT INTO `directores` (`id`, `nombre`, `apellido`) VALUES
(1, 'Christopher', 'Nolan'),
(2, 'Martin', 'Scorsese'),
(3, 'Steven', 'Spielberg'),
(4, 'Stanley', 'Kubrick'),
(5, 'Hayao', 'Miyazaki'),
(6, 'Charles', 'Chaplin'),
(7, 'Fede', 'Alvarez'),
(8, 'James', 'Wan'),
(9, 'James', 'Wan');

INSERT INTO `genero` (`id`, `genero`) VALUES
(1, 'Comedia'),
(2, 'Terror'),
(3, 'Fantasía'),
(4, 'Infantil'),
(5, 'Acción'),
(6, 'Romanticas'),
(7, 'Ciencia Ficción'),
(8, 'Suspenso'),
(9, 'Documentales'),
(10, 'Aventura'),
(11, 'Drama'),
(12, 'Familiares'),
(13, 'Musicales');

INSERT INTO `rangoEdad` (`id`, `rango`) VALUES
(1, 'G - General Audience'),
(2, 'PG - Parental Guidance Suggested'),
(3, 'PG-13 - Parents Strongly Cautioned'),
(4, 'R - Restricted'),
(5, 'NC-17 - Adults Only'),
(6, 'Unrated');

INSERT INTO `peliculas` (`id`, `titulo`, `anio`, `id_director`, `id_genero`, `id_rangoEdad`) VALUES
(1, 'Batman el caballero de la noche', '1943', 1, 8, NULL),
(2, 'Indiana Jones', '1981', 3, 10, NULL),
(3, 'Shutter Island', '2010', 2, 2, NULL),
(4, 'El lobo de Wall Street', '2013', 2, NULL, NULL),
(5, 'El viaje de Chihiro', '2001', 5, NULL, NULL),
(6, 'La quimera de oro', '1925', 6, NULL, NULL),
(7, 'Evil Dead', '1981', 7, NULL, NULL),
(8, 'El conjuro', '2013', 8, NULL, NULL),
(9, 'Aquaman', '2018', 8, NULL, NULL),
(10, 'Liga de la justicia', '2017', 1, NULL, NULL),
(11, 'Operacion luna', '2002', 4, NULL, NULL),
(12, 'Susurros del corazón', '1995', 5, NULL, NULL),
(13, 'No respires', '2016', 7, NULL, NULL),
(14, 'No respires 2', '2021', 7, NULL, NULL),
(15, 'Saw', '2003', 8, 6, NULL),
(16, 'Pelicula Test IV: El Fin del Milenio', '1999', 4, 5, NULL),
(17, 'Pelicula Test', '1994', 4, 5, NULL),
(18, 'Pelicula Test II', '1994', 4, 5, NULL),
(19, 'Pelicula Test III: Duro de testear', '1996', 4, 8, NULL);
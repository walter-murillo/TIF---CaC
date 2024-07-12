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
(1, 'Batman el caballero de la noche', '1943', 1, 8, 4),
(2, 'Indiana Jones', '1981', 3, 10, 2),
(3, 'Shutter Island', '2010', 2, 2, 3),
(4, 'El lobo de Wall Street', '2013', 2, 1, 3),
(5, 'El viaje de Chihiro', '2001', 5, 3, 1),
(6, 'La quimera de oro', '1925', 6, 5, 2),
(7, 'Evil Dead', '1981', 7, 2, 3),
(8, 'El conjuro', '2013', 8, 2, 4),
(9, 'Aquaman', '2018', 8, 5, 3),
(10, 'Liga de la justicia', '2017', 1, 5, 2),
(11, 'Operacion luna', '2002', 4, 9, 3),
(12, 'Susurros del corazón', '1995', 5, 6, 3),
(13, 'No respires', '2016', 7, 2, 3),
(14, 'No respires 2', '2021', 7, 2, 3),
(15, 'Saw', '2003', 8, 2, 5),
(16, 'Pelicula Test IV: El Fin del Milenio', '1999', 4, 5, 5),
(17, 'Pelicula Test', '1994', 4, 5, 3),
(18, 'Pelicula Test II', '1994', 4, 5, 4),
(19, 'Pelicula Test III: Duro de testear', '1996', 4, 8, 5);
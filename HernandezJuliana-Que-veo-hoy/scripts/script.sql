-- Se crea la base de datos, la tabla peliculay se inserta la informacion pre-existente en script de recursos descargables.


CREATE DATABASE que_veo_hoy;
USE peliculas;

CREATE TABLE pelicula(
    id  INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    duracion INT(5),
    director VARCHAR(400) NOT NULL,
    anio INT,
    fecha_lanzamiento DATE,
    puntuacion INT(2),
    poster VARCHAR(300),
    trama VARCHAR(700),
    PRIMARY KEY (id));

SOURCE /Users/Juliana/Desktop/ACAMICA/TRABAJOS/HernandezJuliana-Que-veo-hoy/scripts

-- Se crea la tabla de datos GENERO

CREATE TABLE `que_veo_hoy`.`genero` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_genero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `que_veo_hoy`.`genero` 
ADD CONSTRAINT `genero_id`
  FOREIGN KEY (`id`)
  REFERENCES `que_veo_hoy`.`pelicula` (`genero_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

CREATE TABLE `que_veo_hoy`.`actor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`));


-- Se crea la tabla de referencias actor_pelicula con las foreign keys
CREATE TABLE `que_veo_hoy`.`actor_pelicula` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `actor_id` INT NOT NULL,
  `pelicula_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `actor_id_idx` (`actor_id` ASC) VISIBLE,
  INDEX `pelicula_id_idx` (`pelicula_id` ASC) VISIBLE,
  CONSTRAINT `actor_id`
    FOREIGN KEY (`actor_id`)
    REFERENCES `que_veo_hoy`.`actor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pelicula_id`
    FOREIGN KEY (`pelicula_id`)
    REFERENCES `que_veo_hoy`.`pelicula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
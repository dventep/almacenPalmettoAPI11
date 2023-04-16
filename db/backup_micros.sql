CREATE DATABASE IF NOT EXISTS almacen;
use almacen;

CREATE TABLE IF NOT EXISTS orden (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombreCliente varchar(50) DEFAULT NULL,
  emailCliente varchar(50) DEFAULT NULL,
  totalCuenta decimal(10,2) DEFAULT NULL,
  fecha datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
INSERT INTO orden VALUES (1,'usuario6','usuario6@dominio.com',25840.00,'2023-03-08 06:17:32'),(2,'usuario8','usuario8@dominio.com',2484062.00,'2023-03-12 00:05:48'),(3,'usuario8','usuario8@dominio.com',2480924.00,'2023-03-12 00:07:57'),(4,'usuario8','usuario8@dominio.com',3721909.00,'2023-03-12 00:08:38');

CREATE TABLE IF NOT EXISTS productos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(20) DEFAULT NULL,
  descripcion varchar(50) DEFAULT NULL,
  precio int(11) DEFAULT NULL,
  inventario int(11) DEFAULT NULL,
  PRIMARY KEY (id)
);
INSERT INTO productos VALUES (5,'Papa Arrecha','Descrip Papa',620231,482),(6,'Papita','Almohada DXD',523,9),(7,'Remolacha','Papiro',523,61);

CREATE TABLE IF NOT EXISTS user (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(20) DEFAULT NULL,
  apellido varchar(20) DEFAULT NULL,
  usuario varchar(20) DEFAULT NULL,
  password varchar(20) DEFAULT NULL,
  telefono varchar(15) DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  is_admin tinyint(1) DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uq_user_usuario (usuario),
  UNIQUE KEY `email` (email)
);
INSERT INTO user VALUES (3,'Post','Descrip','saw','1234','561252','email@hotmail.com',1),(6,'usuario7','altamira','user7','1234','3','usuario7@dominio.com',1),(7,'usuario8','altamira','user8','1234','34122','usuario8@dominio.com',0),(9,'David','Polo','davidvp','1235','32152481187','davidventepolo@gmail.ia.club',1),(12,'Paloma','Felipa','felipa','1234','512363','felipa@gmail.com',0);

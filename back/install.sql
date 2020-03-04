CREATE DATABASE IF NOT EXISTS lego;
USE lego;

CREATE TABLE series (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(255),
  year VARCHAR(100),
  serie INT NOT NULL
)

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  email VARCHAR(255),
  date INT NOT NULL,

)


CREATE TABLE collection (
  id_user INT NOT NULL,
  id_serie INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_serie) REFERENCES series(id)
);
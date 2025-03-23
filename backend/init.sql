CREATE DATABASE IF NOT EXISTS psel_db;
USE psel_db;

CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(255) NOT NULL
);

INSERT INTO categorias (categoria) VALUES ('Perfumaria');
INSERT INTO categorias (categoria) VALUES ('Corpo e banho');
INSERT INTO categorias (categoria) VALUES ('Hidratante');
INSERT INTO categorias (categoria) VALUES ('Desodorante');
INSERT INTO categorias (categoria) VALUES ('Cabelos');
INSERT INTO categorias (categoria) VALUES ('Maquiagem');
INSERT INTO categorias (categoria) VALUES ('Rosto');
INSERT INTO categorias (categoria) VALUES ('Casa');
INSERT INTO categorias (categoria) VALUES ('Infantil');
INSERT INTO categorias (categoria) VALUES ('Shampoo');
INSERT INTO categorias (categoria) VALUES ('Sabonete');
INSERT INTO categorias (categoria) VALUES ('Body splash');
INSERT INTO categorias (categoria) VALUES ('Oleo corporal');
INSERT INTO categorias (categoria) VALUES ('Corretivo');
INSERT INTO categorias (categoria) VALUES ('Protecao solar');
CREATE DATABASE notes_app3;
use notes_app2;
CREATE TABLE notes4(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW());
INSERT INTO notes4(title,contents) VALUES('My First Note','Install MySQL'),('My Second Note','Install MySQL2');

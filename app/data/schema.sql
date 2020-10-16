create database msis;
USE msis;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    commentText TEXT NOT NULL
);

INSERT INTO Comments (id, commentText) VALUES
("1", "I have something important to say"),
("2", "D&S is awesome"),
("3", "*smile emoji*"),
("4", "Hi");

SELECT *
FROM Comments

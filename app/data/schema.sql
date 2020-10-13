USE homework;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    comments TEXT NOT NULL
);

INSERT INTO Comments (id, comments) VALUES
("1", "I have something important to say"),
("2", "D&S is awesome"),
("3", "*smile emoji*"),
("4", "Hi");

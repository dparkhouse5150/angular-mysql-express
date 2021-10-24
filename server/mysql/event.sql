create table events (
    id INT AUTOINCREMENT,
    owner varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    description TEXT,
    date Date
    PRIMARY KEY (id),
    INDEX (owner, date)
);

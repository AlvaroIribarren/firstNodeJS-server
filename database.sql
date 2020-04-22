create database library;

create table books(
    section int,
    title text,
    author text
);

insert into books values
    (2, 'N2', 'A2'),
    (3, 'N3', 'A3');

create table users(
    username text,
    password text
);

insert into users values
    ('Alvaro', 'a123'),
    ('Juan', 'j123'),
    ('Pedro', 'p123');


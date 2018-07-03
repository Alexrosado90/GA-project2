--CREATE DATABASE monthlyexpenses;

--\c monthlyexpenses

DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS bills;

CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    monthly_income INTEGER
);

CREATE TABLE bills (
    id SERIAL PRIMARY KEY,
    people_id INTEGER REFERENCES people(id),
    rent INTEGER,
    electric INTEGER,
    car INTEGER,
    insurance INTEGER,
    food INTEGER,
    other INTEGER
);
--\c monthlyexpenses

DELETE FROM people;
DELETE FROM bills;

 INSERT INTO people (name, age, monthly_income) VALUES ('Alex', 27, 3500);
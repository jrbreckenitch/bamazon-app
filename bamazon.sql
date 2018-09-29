-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect animals_db --
USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  item_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(255) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  product_department VARCHAR(255) NOT NULL,
  -- Makes a sting column called "pet_name" --
  price FlOAT,
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER
  -- Sets id as this table's primary key which means all data contained within it will be unique --
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("Star Wars: A New Hope", "movies", 19.99, 50);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("The Matrix", "movies", 12.99, 25);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("Leaves in the River", "music", 9.99, 60);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("Old World Romance", "music", 8.99, 30);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("John Wick", "movies", 11.99, 100);

INSERT INTO products (product_name, product_department, price, stock_quantity )
VALUES ("Into the Wild", "books", 10.99, 15);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("The Way of Kings", "books", 16.99, 70);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("The Lord of the Rings: The Fellowship of the Ring", "movies", 13.99, 40);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("The Name of the Wind", "books", 7.99, 150);

INSERT INTO products (product_name, product_department, price, stock_quantity)
VALUES ("Synthetica", "music", 8.99, 80);
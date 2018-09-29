DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_department VARCHAR(255) NOT NULL,
  price FlOAT,
  stock_quantity INTEGER
);

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
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected to the database.")
  showProducts();
});

function showProducts(){
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
      console.log("Item id: " + result[i].item_id + " || Product name: " + result[i].product_name + " || Product department: " + result[i].product_department + " || Price: " + result[i].price + " || Stock Quantity: " + result[i].stock_quantity);
    }
    runSearch();
  });
}

function runSearch() {
    inquirer
      .prompt([{
        name: "itemChoice",
        type: "input",
        message: "What is the ID of the item you would you like to buy?",
      },
      {
        name: "itemAmount",
        type: "input",
        message: "How many of the item would you like to buy?"
      }]
      )
      .then(function(answer) {
        var chosenItem = answer.itemChoice;
        var purchaseAmount = answer.itemAmount;

        connection.query("SELECT * FROM products WHERE ?", {item_id: chosenItem}, function (err, result) {
          var newItem = result[0];
          var newAmount;
          var totalCost = result[0].price * purchaseAmount;
          if (err) throw err;
          // console.log(newItem.stock_quantity);
          if (newItem.stock_quantity > 0 && newItem.stock_quantity >= purchaseAmount) {
            newAmount = newItem.stock_quantity - purchaseAmount;
              console.log("The cost of " + purchaseAmount + " units of " + result[0].product_name + " is $" + totalCost);
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: newAmount
                },
                {
                  item_id: chosenItem
                }
              ]
            )
            showProducts();
          }
          else if (purchaseAmount > newItem.stock_quantity) {
            console.log("Insufficient quantity to fulfill your order!");
          }      
        });
      }); 
    }

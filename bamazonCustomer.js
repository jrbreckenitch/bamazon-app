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
  // runSearch();
});

function showProducts(){
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    // console.log(result);
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
        // console.log(answer.itemChoice);
        var chosenItem = answer.itemChoice;
        var purchaseAmount = answer.itemAmount;

        connection.query("SELECT * FROM products WHERE ?", {item_id: chosenItem}, function (err, result) {
          var newItem = result[0];
          var newAmount;
          if (err) throw err;
          // console.log(result);
          
          // for (var i = 0; i < results.length; i++) {
          //   if (results[i].item_id === answer.itemChoice) {
          //     chosenItem = results[i];
          //   }
          // }
          // for (var i = 0; i < result.length; i++) {
          //   if (result[i].item_id === answer.itemChoice) {
          //     chosenItem = result[i];
          //   }   
          // }

          console.log(newItem.stock_quantity);

          if (newItem.stock_quantity > 0 && newItem.stock_quantity >= purchaseAmount) {
            newAmount = newItem.stock_quantity - purchaseAmount;
            // for (var i = 0; i < purchaseAmount.length; i++) {
            //   if (purchaseAmount > 0) {
            //     // purchaseAmount === parseInt(answer.itemAmount);
            //     newAmount === parseInt(newItem.stock_quantity) - purchaseAmount;
            //     // purchaseAmount--;
            //   }
            // }
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

        // connection.query("SELECT * FROM products", function (err, result) {
        //   if (err) throw err;
        //   // console.log(result);
        //   var chosenItem;
        //   var purchaseAmount;
        //   var newAmount;
        //   // for (var i = 0; i < results.length; i++) {
        //   //   if (results[i].item_id === answer.itemChoice) {
        //   //     chosenItem = results[i];
        //   //   }
        //   // }
        //   for (var i = 0; i < result.length; i++) {
        //     if (result[i].item_id === answer.itemChoice) {
        //       chosenItem = result[i];
        //     }   
        //   }

        //   console.log(chosenItem);

        //   if (chosenItem.stock_quantity > 0 && chosenItem.stock_quantity >= answer.itemAmount) {
        //     for (var i = 0; i < answer.itemAmount.length; i++) {
        //       if (answer.itemAmount > 0) {
        //         purchaseAmount === parseInt(answer.itemAmount);
        //         newAmount === chosenItem.stock_quantity - purchaseAmount;
        //         // purchaseAmount--;
        //       }
        //     }
        //     connection.query(
        //       "UPDATE products SET ? WHERE ?",
        //       [
        //         {
        //           stock_quantity: newAmount
        //         },
        //         {
        //           item_id: answer.itemChoice
        //         }
        //       ]
        //     )
        //   }
        //   else if (chosenItem.stock_quantity <= 0)  {
        //     console.log("Insufficient quantity to fulfill your order!");
        //   }      
        // });
        
        // connection.query("SELECT * FROM products", function (err, result) {
        //   if (err) throw err;
        //   // console.log(result);
        //   var chosenItem;
        //   var purchaseAmount;
        //   var newAmount;
        //   // for (var i = 0; i < results.length; i++) {
        //   //   if (results[i].item_id === answer.itemChoice) {
        //   //     chosenItem = results[i];
        //   //   }
        //   // }
        //   for (var i = 0; i < result.length; i++) {
        //     if (result[i].item_id === answer.itemChoice) {
        //       chosenItem = result[i];
        //     }
        //   }

        //   console.log(chosenItem);

        //   if (chosenItem.stock_quantity > 0 && chosenItem.stock_quantity >= answer.itemAmount) {
        //     for (var i = 0; i < answer.itemAmount.length; i++) {
        //       if (answer.itemAmount > 0) {
        //         purchaseAmount === parseInt(answer.itemAmount);
        //         newAmount === chosenItem.stock_quantity - purchaseAmount;
        //         // purchaseAmount--;
        //       }
        //     }
        //     connection.query(
        //       "UPDATE products SET ? WHERE ?",
        //       [
        //         {
        //           stock_quantity: newAmount
        //         },
        //         {
        //           item_id: answer.itemChoice
        //         }
        //       ]
        //     )
        //   }
        //   else if (chosenItem.stock_quantity <= 0)  {
        //     console.log("Insufficient quantity to fulfill your order!");
        //   }      
        // });
      }); 
    }

        // var chosenItem;
        // var purchaseAmount;
        // var newAmount;
        // // for (var i = 0; i < results.length; i++) {
        // //   if (results[i].item_id === answer.itemChoice) {
        // //     chosenItem = results[i];
        // //   }
        // // }
        // for (var i = 0; i < result.length; i++) {
        //   if (result[i].item_id === answer.itemChoice) {
        //     chosenItem = result[i];
        //   }
        // }

        // if (parseInt(chosenItem.stock_quantity) > 0) {
        //   for (var i = 0; i < answer.itemAmount.length; i++) {
        //     if (answer.itemAmount > 0) {
        //       purchaseAmount === parseInt(answer.itemAmount);
        //       newAmount === chosenItem.stock_quantity - purchaseAmount;
        //       // purchaseAmount--;
        //     }
        //   }
        //   connection.query(
        //     "UPDATE products SET ? WHERE ?",
        //     [
        //       {
        //         stock_quantity: newAmount
        //       },
        //       {
        //         item_id: answer.itemChoice
        //       }
        //     ]
        //   )
        // }

          // console.log(answer.itemChoice);
          // connection.query("SELECT * FROM products WHERE ?", { item_id: answer.itemChoice }, function(err, res) {
          //   console.log(
          //     "Item ID: " +
          //       res[0].item_id +
          //       " || Product Name: " +
          //       res[0].product_name +
          //       " || Product Department: " +
          //       res[0].product_department +
          //       " || Price: " +
          //       res[0].price +
          //       " || Stock Quantity: " +
          //       res[0].stock_quantity
          //   );
          // });
      
  
  // function itemNameSearch() {
  //   inquirer
  //     .prompt({
  //       name: "item",
  //       type: "input",
  //       message: "What item would you like to search for?"
  //     })
  //     .then(function(answer) {
  //       var query = "SELECT item_id, product_name, product_department, price, stock_quantity FROM products WHERE ?";
  //       connection.query(query, { item: answer.item_id }, function(err, res) {
  //         for (var i = 0; i < res.length; i++) {
  //           console.log("Item id: " + res[i].item_id + " || Product name: " + res[i].product_name + " || Product department: " + res[i].product_department + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
  //         }
  //         runSearch();
  //       });
  //     });
  // }


// function runSearch() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "rawlist",
//       message: "What would you like to buy?",
//       choices: [
//         "Find item by ID",
//         "Find all artists who appear more than once",
//         "Find data within a specific range",
//         "Search for a specific song",
//         "Find artists with a top song and top album in the same year"
//       ]
//     })
//     .then(function(answer) {
//       switch (answer.action) {
//       case "Find item by name":
//         itemNameSearch();
//         break;

//       case "Find all artists who appear more than once":
//         multiSearch();
//         break;

//       case "Find data within a specific range":
//         rangeSearch();
//         break;

//       case "Search for a specific song":
//         songSearch();
//         break;

//       case "Find artists with a top song and top album in the same year":
//         songAndAlbumSearch();
//         break;
//       }
//     });
// }

// function itemNameSearch() {
//   inquirer
//     .prompt({
//       name: "item",
//       type: "input",
//       message: "What item would you like to search for?"
//     })
//     .then(function(answer) {
//       var query = "SELECT item_id, product_name, product_department, price, stock_quantity FROM products WHERE ?";
//       connection.query(query, { item: answer.item_id }, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log("Item id: " + res[i].item_id + " || Product name: " + res[i].product_name + " || Product department: " + res[i].product_department + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
//         }
//         runSearch();
//       });
//     });
// }

// function multiSearch() {
//   var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
//     runSearch();
//   });
// }

// function rangeSearch() {
//   inquirer
//     .prompt([
//       {
//         name: "start",
//         type: "input",
//         message: "Enter starting position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       },
//       {
//         name: "end",
//         type: "input",
//         message: "Enter ending position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//       connection.query(query, [answer.start, answer.end], function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             "Position: " +
//               res[i].position +
//               " || Song: " +
//               res[i].song +
//               " || Artist: " +
//               res[i].artist +
//               " || Year: " +
//               res[i].year
//           );
//         }
//         runSearch();
//       });
//     });
// }

// function songSearch() {
//   inquirer
//     .prompt({
//       name: "song",
//       type: "input",
//       message: "What song would you like to look for?"
//     })
//     .then(function(answer) {
//       console.log(answer.song);
//       connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//         console.log(
//           "Position: " +
//             res[0].position +
//             " || Song: " +
//             res[0].song +
//             " || Artist: " +
//             res[0].artist +
//             " || Year: " +
//             res[0].year
//         );
//         runSearch();
//       });
//     });
// }

// function songAndAlbumSearch() {
//   inquirer
//     .prompt({
//       name: "artist",
//       type: "input",
//       message: "What artist would you like to search for?"
//     })
//     .then(function(answer) {
//       var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
//       query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
//       query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year ";

//       connection.query(query, [answer.artist, answer.artist], function(err, res) {
//         console.log(res.length + " matches found!");
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             "Album Position: " +
//               res[i].position +
//               " || Artist: " +
//               res[i].artist +
//               " || Song: " +
//               res[i].song +
//               " || Album: " +
//               res[i].album +
//               " || Year: " +
//               res[i].year
//           );
//         }

//         runSearch();
//       });
//     });
// }


// function howMany(){
//   inquirer
//       .prompt({
//         name: "itemChoice",
//         type: "input",
//         message: "How many of this item would you like to purchase?",
//       },
//       )
//       .then(function(answer) {
//           console.log(answer.itemChoice);
//           connection.query("SELECT * FROM products WHERE ?", { item_id: answer.itemChoice }, function(err, res) {
//             console.log(
//               "Item ID: " +
//                 res[0].item_id +
//                 " || Product Name: " +
//                 res[0].product_name +
//                 " || Product Department: " +
//                 res[0].product_department +
//                 " || Price: " +
//                 res[0].price +
//                 " || Stock Quantity: " +
//                 res[0].stock_quantity
//             );
//             runSearch();
//           });
//       }); 
// }
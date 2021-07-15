const mysql = require('mysql');

const connection = mysql.connection({
    host     : 'localhost',
    port : 8888, 
    user     : 'root',
    password : '',
    database: 'nodedb'
});

let query = 'SELECT id,fruitname,quantity FROM fruits WHERE id = 1'

connection.query(query, function(err, results){
    if (err){
        console.error(err);
    };

    console,log(results);
    connection.query('UPDATE fruits SET fruit = "pomegranate", quantity = 4 WHERE id = 1', function(err, results) {
        if (err) {
            console.error(err);
        };
        console.log(results);
    });
});
const mysql = require('mysql');

const connection = mysql.connection({
    host     : 'localhost',
    port : 8888, 
    user     : 'root',
    password : '',
    database: 'nodedb'
});

let query = ' INSERT INTO fruits (fruit, quantity) VALUES ("cherry",10)';

connection.query(query, function(err, results){
    if (err){
        console.error(err);
    };

    console,log("inserted record");
});
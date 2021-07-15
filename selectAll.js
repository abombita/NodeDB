const mysql = require('mysql');

const connection = mysql.connection({
    host     : 'localhost',
    port : 8888, 
    user     : 'root',
    password : '',
    database: 'nodedb'
});


connection.query('SELECT * FROM fruits', function(err, results){
    if (err){
        console.error(err);
    };

    console,log(results);
});
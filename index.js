
const mysql = require('mysql');

const connection = mysql.connection({
    host     : 'localhost',
    port : 8888, 
    user     : 'root',
    password : '',
    database: 'nodedb'
});



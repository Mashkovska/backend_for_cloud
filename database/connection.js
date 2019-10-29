const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'Tetiana', // e.g. 'my-db-user'
    password: 'root', // e.g. 'my-db-password'
    database: 'fish_farm', // e.g. 'my-database'
    host: '35.239.245.76'
})

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if(!err) {
                console.log('Success');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();

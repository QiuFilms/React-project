const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password : "pilka123",
    host :"localhost",
    port : "5432",
    database : "website"
});

module.exports = pool;
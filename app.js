const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("knex")(require("./knexfile").development);
require("dotenv").config();
const petreeRoutes = require("./routes/petree");

app.use(cors());
app.use(express.json());
app.use(petreeRoutes);

const port = process.env.PORT || 8080;
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: process.env.DB_LOCAL_DBNAME,
  user: process.env.DB_LOCAL_USER,
  password: process.env.DB_LOCAL_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    throw err;
  }
  console.log("Connected to MySQL server");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

require("dotenv").config();

module.exports = {
  useNullAsDefault: true,
  development: {
    client: "mysql2",
    connection: {
      host: "localhost", 
      database: process.env.DB_LOCAL_DBNAME,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },
};

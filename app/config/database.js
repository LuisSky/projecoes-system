require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATA_BASE,
  host: process.env.DB_HOST,
  dialect: 'postgres',
}
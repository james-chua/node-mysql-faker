const mysql = require('mysql')
var faker = require('faker')
require('dotenv').config()

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'faker_demo'
})

db.connect((err) => {
  if (err) throw err
  console.log('Connected...')
})

// Insert users
for (let i = 0; i < 10; i++) {
  let name = faker.name.firstName() + ' ' + faker.name.lastName()
  let email = faker.internet.email()
  let sql = 'INSERT INTO users SET ?'
  db.query(sql, { name, email }, (err, result) => {
    if (err) throw err
    console.log(result)
  })
}

// Display users
db.query('SELECT * FROM users', (err, results) => {
  if (err) throw err
  console.log(results)
})

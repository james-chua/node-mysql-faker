# Node.js MySQL Faker Seeder

## Quick Setup

- Clone repo
- Create database and table
- cd to node-mysql-faker
- npm install
- node app

---

## Manual Setup

### Core Dependencies

- dotenv: ^10.0.0
- faker: ^5.5.3
- mysql": ^2.18.1

```
$ npm i dotenv faker mysql
```

### Create database and table (for example)

```
> CREATE DATABASE faker_demo
> CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));
```

### Rename .env.example to .env and update

### Open app.js and make necessary changes

### Run app.js (CTRL+C when done)

```
$ node app
$ ^C
```

### Resources

[Marak / faker.js](https://github.com/Marak/faker.js)

[MySQL Github](https://github.com/mysqljs/mysql)

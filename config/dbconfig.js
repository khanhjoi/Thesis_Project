import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.HOST_MYSQL,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DB_MYSQL
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;

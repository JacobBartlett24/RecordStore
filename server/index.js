const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pacforever2020@',
  database: 'vinyls',
});

app.get('/', (req,res) => {
  
  
  res.send('hello worlsssd');
});

app.listen(3002, () => {
console.log('hello worsssld');
});
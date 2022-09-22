const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pacforever2020@',
  database: 'vinyls',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get',(req,res) => {
  const sqlSelect = 
  'SELECT * FROM Vinyls';

db.query(sqlSelect, (err,result) =>{
  res.send(result);
});

})

app.post("/api/insert/cart", (req,res)=>{

  const title = req.body.name;
  const price = req.body.price;

  const sqlInsertCart = 
    'INSERT INTO Cart (title, price) VALUES (?,?)';

  db.query(sqlInsertCart, [title,price], ((err,result) =>{console.log(result)}));
});

app.post("/api/insert", (req,res)=>{

  const title = req.body.name;
  const price = req.body.price;

  const sqlInsert = 
    'INSERT INTO Vinyls (title, price) VALUES (?,?)';

  db.query(sqlInsert, [title,price], ((err,result) =>{console.log(result)}));
});

app.post("/api/delete", (req,res)=>{

  const title = req.body.name;
  
  const sqlDelete = 
    'DELETE FROM Vinyls WHERE title=(?)';
  db.query(sqlDelete, [title], ((err,result) => {console.log(result)}))
})



app.listen(3002, () => {
console.log('hello worsssld');
});
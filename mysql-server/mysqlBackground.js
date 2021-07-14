var cors = require('cors')
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const jsonexport = require('jsonexport');
const fs = require('fs');
const path = require('path');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'tomatedb'
});

const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

//SELECT na tabela records
app.get("/getRecords", (req, res) => { 
  
  let sql = "SELECT * FROM records WHERE sensorId = "+req.query.sensorId+" AND dt >= "+req.query.startDt+"AND dt <= "+req.query.endDt+" ORDER BY dt ASC"; 
  pool.query(sql, function (error, results, fields) {
    if (error) 
      throw error;
    else
      res.json(results);
  });  
});

app.get("/getAllRecords", (req, res) => { 
  
  let sql = "SELECT * FROM records"
  pool.query(sql, function (error, results, fields) {
    if (error) 
      throw error;
    else
      var x = results

      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
        res.write(data);
        return res.end();
      })

      const csvOptions = { rowDelimiter: '|'}; 

      jsonexport(x, csvOptions, function(err, csv){
        if (err) return console.error(err);
        console.log(csv);

        fs.appendFile(path.join(__dirname, 'public', 'DataSet.csv'), csv, function (err){
          // Se ocorrer um erro, especifique
          if (err) throw err;
          // Senão, logue no console = salvo!
          console.log("salvo!")
      })
    });
  });  
});

app.get("/exportAllRecordsToCsv", (req, res) => { 
  
  let sql = "SELECT * FROM records WHERE dt >= 2000 AND dt <= 2005 ORDER BY dt ASC"; 
  pool.query(sql, function (error, results, fields) {
    if (error) 
      throw error;
    else
      res.json(results); // Export json to CSV - node
  });  
});

// set port, listen for requests
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
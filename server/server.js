const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: '34.27.144.22',
    user: 'root',
    password: '%%56Hu3#PB:zdy%D',
    database: 'ti_workshop_steven',
    port: 3306
});

connection.connect((error) => {
    if (error) {
      console.error('Failed to connect to the database:', error);
    } else {
      console.log('Connected to the database');
    }
});

app.get('/joblist', (req, res) => {
    const query = 'SELECT * FROM jobs';
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Failed to retrieve jobs from the database:', error);
        res.status(500).json({ error: 'Failed to retrieve jobs from the database.' });
      } else {
        res.json(results);
      }
    });
  });

app.post('/jobadd', (req, res) => {
    const { id, title, author, content } = req.body;
  
    // Check if required fields are provided
    if (!id || !title || !author || !content)  {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
  
    const query = 'INSERT INTO jobs VALUES(?, ?, ?, ?)';
    const values = [id, title, author, content];
  
    connection.query(query, values, (error, result) => {
      if (error) {
        console.error('Failed to add job to the database:', error);
        
        res.status(500).json({ error: 'Failed to add job to the database.' });
      } else {
        res.status(201).json({ id, title, author, content });
        console.log( 'job Blog: ', { id, title, author, content });
      }
    });
  });

  app.listen(5001, () => {
    console.log('Server running on http://localhost:5001');
  });
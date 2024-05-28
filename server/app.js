const express = require('express');
const cors = require("cors")

const mysql = require('mysql2/promise');

const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'LP'
});

app.use(cors());

app.get('/api/languages', async (req, res) =>{
  try {
    const [data] = await pool.execute('SELECT * FROM Languages');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/tasks', async (req, res) =>{
  try {
    const [data] = await pool.execute('SELECT * FROM Tasks');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/theory", async (req, res) => {
  try {
    const languageId = req.query.id_languages;
    const [data] = await pool.execute(
      "SELECT * FROM TheorySections WHERE id_languages = ?",
      [languageId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

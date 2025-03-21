const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5001;

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to SQLite database');
});

// Create users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    nic TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)`);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Registration endpoint
app.post('/register', (req, res) => {
    const { email, username, nic, password } = req.body;

    if (!email || !username || !nic || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = `INSERT INTO users (email, username, nic, password) VALUES (?, ?, ?, ?)`;
    const params = [email, username, nic, password];

    db.run(sql, params, function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(400).json({ error: 'User already exists' });
            }
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'User created successfully',
            id: this.lastID,
            user: { email, username, nic }
        });
    });
});

// Login endpoint
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.get(sql, [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Remove password from response
        const { password, ...userData } = row;
        res.json({
            message: 'Login successful',
            user: userData
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
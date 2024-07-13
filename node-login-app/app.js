// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' directory

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simplified login validation - replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

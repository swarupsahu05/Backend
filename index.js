
require('dotenv').config();

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Swarup! Backend Development Started 🚀');
});
app.get('/twitter', (req, res) => {
    res.send('https://github.com/swarupsahu05/Backend');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.get('/insta',(req, res) => {
    res.send("<h2>Instagram Page</h2>")
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`);
});
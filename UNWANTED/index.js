const express = require('express')
const app = express();

app.use(express.static('public')); // serve static files from the 'public' folder

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html'); // serve home.html from the 'public' folder
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html'); // serve home.html from the 'public' folder
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html'); // serve home.html from the 'public' folder
});

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/game.html'); // serve home.html from the 'public' folder

});

app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/public/help.html'); // serve home.html from the 'public' folder
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
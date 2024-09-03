const express = require('express');
const path = require('path');
const app = express();

// Middleware to log requests
const middlewareFunction = (req, res, next) => {
    console.log('Middleware Function Executed');
    next();
};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/home', middlewareFunction, (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/game', (req,res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, 'help.html'));
});

// Fix for handling multiple routes
app.get(['/faqs', '/FAQS', '/FAQs'], (req, res) => {
    res.sendFile(path.join(__dirname, 'FAQs.html'));
});

// Dynamic routes
app.get('/user/:name', (req, res) => {
    const myname = req.params.name;
    res.send(`Hello ${myname}`);
});

app.get('/user/:rollno', (req, res) => {
    const RollCall = req.params.rollno;
    res.send(`RollNo :: ${RollCall}`);
});

app.get('/user/:enrollmentno', (req, res) => {
    const Enrollment_No = req.params.enrollmentno;
    res.send(`Enrollment No. ${Enrollment_No}`);
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

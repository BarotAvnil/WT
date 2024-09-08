const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(bodyParser.urlencoded());

// Connect to MongoDB
mongoose.connect('mongodb+srv://AvnilBarot:t2jsREhhqfqLgDcE@cluster0.2fcfd.mongodb.net/banking', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Routes
app.use('/users', userRoutes);
app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);

// Start server
const Port = 3236;
app.listen(Port, ()=>{
    console.log(`Server started on port ${Port}`);
});
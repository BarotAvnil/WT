const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://AvnilBarot:t2jsREhhqfqLgDcE@cluster0.2fcfd.mongodb.net/banking', 
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
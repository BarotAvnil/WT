const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schema = require('./schema');

const Student = mongoose.model('Student', schema);

mongoose.connect('mongodb+srv://AvnilBarot:t2jsREhhqfqLgDcE@cluster0.2fcfd.mongodb.net/MongoDemo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json()); // Add JSON parsing

    // get All
    app.get('/students', async (req, res) => {
      try {
        const ans = await Student.find();
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error fetching students' });
      }
    });

    // get by ID
    app.get('/students/:id', async (req, res) => {
      try {
        const student = await Student.findOne({
          role: req.params.id
        });
        if (!student) {
          res.status(404).send({ message: 'Student not found' });
        } else {
          res.send(student);
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error fetching student' });
      }
    });

    // create
    app.post('/students', async (req, res) => {
      try {
        const student = new Student(req.body);
        const ans = await student.save();
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error creating student' });
      }
    });

    // delete
    app.delete('/students/:id', async (req, res) => {
      try {
        const student = await Student.findByIdAndDelete({
          _id: req.params.id
        });
        if (!student) {
          res.status(404).send({ message: 'Student not found' });
        } else {
          res.send({ message: 'Student deleted successfully' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error deleting student' });
      }
    });

    // update
    app.patch('/students/:id', async (req, res) => {
      try {
        const stu = await Student.findOne({ role : req.params.id });
        stu.name = req.body.name;
        stu.email = req.body.email;
        const ans = await stu.save();
        res.send(ans);
        if (!stu) {
          res.status(404).send({ message: 'Student not found' });
        } else {
          res.send(stu);
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error updating student' });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
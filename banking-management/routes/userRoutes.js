const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Update User
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(404).send(error);
    }
});

//Delete USer
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        //const deleteUser = await User.deleteOne(id);
        const deleteUser = await User.findByIdAndRemove(id);
        if (!deleteUser) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send({ message: 'User deleted successfully' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;

/*Using Router here because app is the main application object 
and the router is the subset of APP 
which allows us to group related routes together*/
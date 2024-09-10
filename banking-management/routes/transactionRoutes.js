const express = require('express');
const Transaction = require('../models/transactionModel');
const Account = require('../models/accountModel');
const router = express.Router();

// Create a transaction
router.post('/', async (req, res) => {
    const { accountId, amount, type } = req.body;
    try {
        const account = await Account.findById(accountId);

        if (type === 'debit' && account.balance < amount) {
            return res.status(400).send('Insufficient balance');
        }
        //404 bad request

        const transaction = new Transaction({ accountId, amount, type });
        await transaction.save();

        // Update account balance
        if (type === 'credit') {
            account.balance += amount;
        } else {
            account.balance -= amount;
        }

        await account.save();
        res.status(201).send(transaction);
        //201 created
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('accountId');
        res.status(200).send(transactions);
        //200 ok
    } catch (error) {
        res.status(500).send(error);
        //internal server error
    }
});

// Get transaction by Id
router.get('/:id', async (req, res) => {
    try {
        const transactions = await Transaction.findById(req.params.id).populate('accountId');
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete transaction
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndRemove(req.params.id);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
});

//UPdate transaation
router.patch('/:id', async (req, res) => { 
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
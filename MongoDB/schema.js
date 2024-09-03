const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = StudentSchema;
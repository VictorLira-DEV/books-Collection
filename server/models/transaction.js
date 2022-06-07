
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    orderId: {
        type: String
    },
    amount: {
        type: Number
    },
    cashback: {
        type: Number
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Transaction =  mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
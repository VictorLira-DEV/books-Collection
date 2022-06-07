const express = require("express");
const mongoose = require("mongoose");
const mongoConfig = require("./config/mongoConfig");
const cors = require("cors");
const TransactionModel = require("./models/transaction");
const app = express();

app.use(express.json());
app.use(cors());

const uri = mongoConfig.url + mongoConfig.database;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);



app.post("/addTransaction", async (req, res) => {
    const orderId = req.body.orderId;
    const amount = req.body.amount;
    const category = req.body.category;
    const transaction = new TransactionModel({orderId: orderId, amount: amount, category: category});

    try {
        await transaction.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});


app.get("/readTransactions", async (req, res) => {
    // FoodModel.find({$where: {foodName:  "Apple"}}, )
    TransactionModel.find({}, (err, results) => {
        if (err) {
            res.send(err);
        }

        res.send(results);
    });
});

app.get("/spentAnalysisWithDate", async (req, res) => {
    const sdate = req.query.sdate;
    const edate = req.query.edate;
    TransactionModel.aggregate([
            { "$match": {
                    "date": {"$gte": new Date(sdate), "$lte": new Date(edate)}
            }},
            { $group:{ _id:'$category', totalSpent: { $sum:'$amount'}, totalCashBack: {$sum:'$cashback'}}}
        ],
        (err, results) => {
            if (err) {
                res.send(err);
            }
            res.send(results);
        })
});



app.listen(3004, () => {
    console.log("server runnig on port 3004");
});

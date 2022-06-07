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

// app.put("/update", async (req, res) => {
//     const id = req.body.id;
//     const bookName = req.body.bookName;
//     const bookAuthor = req.body.bookAuthor;
//     const bookPrice = req.body.bookPrice;
//     const bookCategory = req.body.bookCategory;
//     try {
//         await BookModel.findById(id, (err, updateBook) => {
//             updateBook.bookName = bookName;
//             updateBook.bookAuthor = bookAuthor;
//             updateBook.bookPrice = bookPrice;
//             updateBook.bookCategory = bookCategory;
//             updateBook.save();
//             res.send("updated");
//         });
//     } catch (err) {
//         console.log(err);
//     }
// });

// app.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id;
//     await BookModel.findByIdAndRemove(id).exec();
//     res.send("deleted");
// });

app.listen(3004, () => {
    console.log("server runnig on port 3004");
});

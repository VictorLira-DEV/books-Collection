import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import styles from "../styles/TransactionList/TransactionList.module.css";

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <table className={styles["content-table"]}>
            <thead>
                <tr>
                    <th >Order Id</th>
                    <th >Amount</th>
                    <th >Category</th>
                    <th >Date</th>\
                    <th>Cashback</th>
                </tr>
            </thead>
            {transactions.length > 0 && (
                <tbody>
                    {transactions.map((transaction) => {
                        return (
                            <tr key={transaction._id}>
                                <td>{transaction.orderId}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.cashback}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            )}
        </table>
    );
};

export default TransactionList;

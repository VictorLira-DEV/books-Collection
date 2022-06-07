import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import styles from "../styles/TransactionList/TransactionList.module.css";

const SpentAnalysis = (props) => {
    const { spentAnalysis } = useContext(GlobalContext);

    return (
        <table className={styles["content-table"]}>
            <thead>
                <tr>
                    <th >Category</th>
                    <th >Amount</th>
                    <th >CashBack</th>
                </tr>
            </thead>
            {spentAnalysis.length > 0 && (
                <tbody>
                    {spentAnalysis.map((spent) => {
                        return (
                            <tr key={spent._id}>
                                <td>{spent._id}</td>
                                <td>{spent.totalSpent}</td>
                                <td>{spent.totalCashBack}</td>
                            </tr>
                        );
                    })}
                </tbody>
            )}
        </table>
    );
};

export default SpentAnalysis;

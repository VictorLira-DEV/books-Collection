import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import styles from "../styles/AddNewTransaction/AddNewTransaction.module.css";
import { GiCancel } from "react-icons/gi";
import Button from "./UI/Button";
import SelectCategory from "./UI/SelectCategory";
import TransactionFormField from "./UI/TransactionFormField";

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const history = useHistory();
    const [isFormValid, setIsFormValid] = useState(false);


    const [orderId, dispatchOrderId] = useReducer(
        (state, action) => {
            if(action.type === "TRANSACTION_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }
            
            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )


    //bookprice
    const [amount, dispatchAmount] = useReducer(
        (state, action) => {
            if(action.type === "TRANSACTION_INPUT"){
                return {value: action.val, isValid: action.val.length >= 1}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    //bookSelect
    const [category, dispatchCategory] = useReducer(
        (state, action) => {
            if(action.type === 'TRANSACTION_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )

    const { isValid: orderIdIsValid} = orderId;
    const { isValid: amountIsValid} = amount;
    const { isValid: categoryIsValid} = category;

    //useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                orderIdIsValid &&
                amountIsValid &&
                categoryIsValid  !== false
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [orderIdIsValid, amountIsValid, categoryIsValid]);


    const onSubmit = function (e) {
        e.preventDefault()
        if(isFormValid !== true) return

        const newTransaction = {
            orderId: orderId.value,
            amount: amount.value,
            category: category.value
        };

        Axios.post("http://localhost:3004/addTransaction", {
            orderId: orderId.value,
            amount: amount.value,
            category: category.value
        });
        addTransaction(newTransaction);
        history.push("/");
    };

    const onOrderIdChange = function (e) {
        dispatchOrderId({type: "TRANSACTION_INPUT", val: e.target.value} )
    };

    const onAmounrChange = function (e) {
        dispatchAmount({type: 'TRANSACTION_INPUT', val: e.target.value});
    };

    const onCategoryChange = function (e) {
        dispatchCategory({type: "TRANSACTION_INPUT", val: e.target.value})
        
    };


    return (
        <form onSubmit={onSubmit} className={`${styles.form}`}>
            <TransactionFormField
                label="Order Id"
                value={orderId.value}
                type="text"
                placeholder="enter order id"
                onChange={onOrderIdChange}
                className={`${orderId.isValid === false ? styles.invalid : ''}`}
            />


            <TransactionFormField
                label="Amount"
                value={amount.value}
                type="number"
                placeholder="enter amount"
                onChange={onAmounrChange}
                className={`${amount.isValid === false ? styles.invalid : ''}`}
            />

            <SelectCategory onChange={onCategoryChange}/>

            <div className={styles.buttons}>
                <Button type="submit" className={`${isFormValid ? styles.submit : styles.disabled}`}>
                    Submit
                </Button>
                <Link to="/" className={styles.link}>
                    <GiCancel /> Cancel
                </Link>
            </div>
        </form>
    );
};

export default AddTransaction;

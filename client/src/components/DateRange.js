import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import styles from "../styles/AddNewTransaction/AddNewTransaction.module.css";
import { GiCancel } from "react-icons/gi";
import Button from "./UI/Button";
import DateField from "./UI/DateField";

const DateRange = () => {
    const { changeDateRange } = useContext(GlobalContext);
    const history = useHistory();
   // const [isFormValid, setIsFormValid] = useState(false);


    const [startDate, dispatchStartDate] = useReducer(
        (state, action) => {
            if(action.type === "DATE_INPUT"){
                return {value: action.val, isValid: true}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )


    const [endDate, dispatchEndDate] = useReducer(
        (state, action) => {
            if(action.type === "DATE_INPUT"){
                return {value: action.val, isValid: action.val.length >= 1}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )


    const onStartDateChange = function (e) {
        dispatchStartDate({type: "DATE_INPUT", val: e.target.value} )
    };

    const onEndDateChange = function (e) {
        dispatchEndDate({type: "DATE_INPUT", val: e.target.value} )
    };



    const onSubmit = function (e) {
        e.preventDefault()

        const date = {
            "sdate" : startDate.value,
            "edate" : endDate.value
        }
        const sdate = startDate.value;
        const edate = endDate.value;
        changeDateRange(date);
        history.push("/");
    };




    return (
        <form onSubmit={onSubmit} className={`${styles.form}`}>
            <DateField
                label="start date"
       //         value={startDate.value}
                type="text"
                placeholder="enter start id"
                onChange={onStartDateChange}
                className={`${startDate.isValid === false ? styles.invalid : ''}`}
            />
            <DateField
                label="end date"
               // value={endDate.value}
                type="text"
                placeholder="enter start id"
                onChange={onEndDateChange}
                className={`${endDate.isValid === false ? styles.invalid : ''}`}
            />
            <div className={styles.buttons}>
                <Button type="submit" className={`${styles.submit}`}>
                    Submit
                </Button>
                <Link to="/" className={styles.link}>
                    <GiCancel /> Cancel
                </Link>
            </div>
        </form>
    );
};

export default DateRange;

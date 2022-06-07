import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = () => {
    const { changeDateRange } = useContext(GlobalContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



    const onStartDateChange = function (date) {
        setStartDate(date);
        const range = {
            "sdate" : {startDate},
            "edate" : {endDate}
        }
        changeDateRange(range);
    };

    const onEndDateChange = function (date) {
        setEndDate(date);
        const range = {
            "sdate" : {startDate},
            "edate" : {endDate}
        }
        changeDateRange(range);
    };



    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date:Date) => onStartDateChange(date)}
                showTimeSelect
                dateFormat="MM/dd/yyyy"
            />
            <DatePicker
                selected={endDate}
                onChange={(date:Date) => onEndDateChange(date)}
                showTimeSelect
                dateFormat="MM/dd/yyyy"
            />
        </div>
    );
};

export default DateRange;

import React, { createContext, useReducer, useEffect } from 'react';
import Axios from "axios";
import {AppReducer} from './AppReducer';

//initial state;
const initialState = {
    spentAnalysis:[]
}

// create Context
export const GlobalContext = createContext(initialState);

// provider component;
export const GlobalProvider = (({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
        useEffect(() => {

            // Axios.get("http://localhost:3004/readTransactions").then((response) => {
            //     dispatch({type: 'INITIAL_DATA', payload: response.data})
            // });
            Axios.get("http://localhost:3004/spentAnalysisWithDate?sdate=2022-06-06&edate=2022-06-08").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });

        }, []);



    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })

        setTimeout(() => {
            // Axios.get("http://localhost:3004/readTransactions").then((response) => {
            //     dispatch({type: 'INITIAL_DATA', payload: response.data})
            // });
            Axios.get("http://localhost:3004/spentAnalysisWithDate?sdate=2022-06-06&edate=2022-06-08").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });
        },500)
    }

    const changeDateRange = (date) => {
        const sdate = date.sdate;
        const edate = date.edate;
        const url = "http://localhost:3004/spentAnalysisWithDate?sdate=" + sdate + "&edate=" + edate;

            // Axios.get("http://localhost:3004/readTransactions").then((response) => {
            //     dispatch({type: 'INITIAL_DATA', payload: response.data})
            // });
            Axios.get(url).then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });

    }

     
    return(
        <GlobalContext.Provider value={{
            //transactions : state.transactions,
            spentAnalysis: state.spentAnalysis,
            addTransaction,
            changeDateRange,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}) ;
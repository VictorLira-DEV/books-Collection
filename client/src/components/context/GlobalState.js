import React, { createContext, useReducer, useEffect } from 'react';
import Axios from "axios";
import {AppReducer} from './AppReducer';

//initial state;
const initialState = {
    transactions: []
}

// create Context
export const GlobalContext = createContext(initialState);

// provider component;
export const GlobalProvider = (({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
        useEffect(() => {
            Axios.get("http://localhost:3004/readTransactions").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });
        }, []);



    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })

        setTimeout(() => {
            Axios.get("http://localhost:3004/readTransactions").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });
        },500)
    }

     
    return(
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}) ;
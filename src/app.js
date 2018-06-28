import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "../src/store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: "Water bill", amount: 24500, createdAt: Date.now()}));

setTimeout(()=>{
    const expenseTwo = store.dispatch(addExpense({description: "Gas bill", amount: 38500, createdAt: Date.now()}));
}, 10000);
// store.dispatch(setTextFilter(""));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filter));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));



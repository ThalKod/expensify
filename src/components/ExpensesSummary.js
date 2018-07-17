import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpenseTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = (props)=>{
    const expenseWord = props.expenseCount > 1 ? "expenses" : "expense";
    return (
        <div>
            <h1>Viewing {props.expenseCount} {expenseWord} totalling {numeral(props.expenseTotal /100).format("$0,0.00")}</h1>
        </div>
    )
};

const mapStatetoprops = (state)=>{
    const visibleExpenses = selectExpenses(state.expenses, state.filter);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses)
    };
};

export default connect(mapStatetoprops)(ExpensesSummary);
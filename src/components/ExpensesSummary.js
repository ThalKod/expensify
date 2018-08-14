import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import selectExpenseTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = (props)=>{
    const expenseWord = props.expenseCount > 1 ? "expenses" : "expense";
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{numeral(props.expenseTotal /100).format("$0,0.00")}</span></h1>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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
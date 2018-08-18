import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import selectExpenseTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = (props)=>{
    const expenseWord = props.expenseCount > 1 ? "expenses" : "expense";
    const hiddenExpensesCount = props.totalNumberOfExpenses - props.expenseCount;
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{numeral(props.expenseTotal /100).format("$0,0.00")}</span></h1>
                {
                    hiddenExpensesCount > 0 ? <p>Not showing {hiddenExpensesCount} expense(s) because of Filters</p> : <p>No filters in place</p>
                }
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
        totalNumberOfExpenses: state.expenses.length,
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses)
    };
};

export default connect(mapStatetoprops)(ExpensesSummary);
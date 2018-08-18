import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense, startEditExpense } from "../actions/expenses";
import ComfirmModal from "./ComfirmModal";


class EditExpensePage extends React.Component {

    state = {
        showModal: false,
    };
    
    removeExpense = ()=>{
        this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }))
        this.props.history.push("/");
    }

    handleCloseModal = ()=>{
        this.setState({ showModal: false });
    }

    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={(expense)=>{
                        this.props.dispatch(startEditExpense(this.props.expense.id,expense));
                        this.props.history.push("/");
                    }}
                    />
                    <button className="button button--secondary" onClick={()=>{
                        this.setState({ showModal: true });
                    }}>remove</button>
                </div>
                <ComfirmModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} removeExpense={this.removeExpense} />
            </div>
        );
    }
}

const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);
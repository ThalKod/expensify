import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

 
class ExpenseForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
                description: props.expense ? props.expense.description : "",
                note: props.expense ? props.expense.note : "",
                amount: props.expense ? (props.expense.amount / 100).toString() : "",
                createAt: props.expense ? moment(props.expense.createAt) : moment(),
                calendarFocused: false,
                error: ""
            };
    }

    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>({
            description 
        }));
    };

    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(()=>({
            note
        }));
    };

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }
    }

    onDateChange = (createAt)=>{
        if(createAt){
            this.setState(()=>({ createAt }));
        }
    };

    onFocusChange = ({ focused })=>{
        this.setState(()=>({ calendarFocused: focused}));
    };

    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                error: "Please provide description and amount"
            }));
        }else{
            this.setState(()=>({
                error: ""
            }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render(){
        return (
            <div>
               {this.state.error && <p>{this.state.error}</p>}
               <form action="" onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false }
                    />
                    <textarea name="" id="" cols="30" rows="10"
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    ></textarea>
                    <button>{this.props.expense ? "Edit" : "Add"} Expense</button>
               </form>
            </div>
        )
    }
}

export default ExpenseForm;
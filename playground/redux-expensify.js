import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({ description = "", note = "", amount = 0, createdAt = Date.now() } = {})=>({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {})=>({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates)=>({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// SET_TEXT
const setTextFilter = (text = "")=>({
    type: "SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
const setStartDate = (startDate)=> ({
    type: "SET_START_DATE",
    startDate
});

// SET_END_DATE
const setEndDate = (endDate)=> ({
    type: "SET_END_DATE",
    endDate
});


// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];

        case "REMOVE_EXPENSE":
            return state.filter((expense) => expense.id !== action.id);
        
        case "EDIT_EXPENSE":
            return state.map((expense)=> {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });

        default: 
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };

        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };

        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }

        default: 
            return state;
    };
};

// Get Visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate })=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(sortBy == "amount"){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpensives = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpensives);
});

const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 1220, createdAt:-9000 }));
const expenseTwo = store.dispatch(addExpense({description: "Coffe", amount: 20, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("root"));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(2000));
// store.dispatch(setEndDate(125));

const demoState = {
    expenses: [{
        id: "ppaaospa",
        description: "Jaunury rent",
        note: "final note",
        amount: 545290,
        createdAt: Date.now()
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // Date or amount
        startDate: undefined,
        endDate: undefined
    }
};


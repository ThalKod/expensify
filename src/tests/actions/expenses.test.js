import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addExpense, startAddExpense, editExpense, removeExpense, setExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createAt })=>{
        expensesData[id] = { description, note, amount, createAt };
    });
    database.ref("expenses").set(expensesData).then(() => done());
})


test("Should setup remove expense action object", ()=>{
    const action = removeExpense({ id: "123SFLS" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123SFLS"
    });
});

test("Should setup edit expese action object ", ()=>{
    const action = editExpense("3241IDJ", { id: "3241IDJ", description: "lol" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "3241IDJ",
        updates: {
            id: "3241IDJ", 
            description: "lol" 
        }
    });
});

test("Should setup addExpense action object", ()=>{

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});


test("should add expense to database and store", (done)=>{
    const store = createMockStore({});

    const expenseData = {
        description: "Mousse",
        amount: 3000,
        note: "This one is Better",
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add expense with defaults to database and store", (done)=>{
    const store = createMockStore({});

    const dataDefault = {
        description : "", 
        note :"", 
        amount : 0, 
        createdAt : Date.now()
    };

    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...dataDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(dataDefault);
        done();
    });
});

test("should setup set expense action object with data", ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});
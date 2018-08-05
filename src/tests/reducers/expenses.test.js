import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("shoudl set default state", ()=>{
    const state = expensesReducers(undefined, { type: "@@INTI" });
    expect(state).toEqual([]);
});

test("should set expenses", ()=>{
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[0]]
    };

    const data = expensesReducers(expenses, action);
    expect(data).toEqual([expenses[0]]);
});
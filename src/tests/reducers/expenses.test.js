import expensesReducers from "../../reducers/expenses";

test("shoudl set default state", ()=>{
    const state = expensesReducers(undefined, { type: "@@INTI" });
    expect(state).toEqual([]);
});
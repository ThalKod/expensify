import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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

test("Should setup addExpense actioin object", ()=>{
    const expenseData = {
        description: "Rent",
        note : "This is my note for rent",
        amount: 109284,
        createdAt: 1000
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("Should setup addExpense actioin object with default value", ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "", 
            note: "", 
            amount: 0,
            createdAt: Date.now(),
            id: expect.any(String)
        }
    }); 
});
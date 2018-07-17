import expenses from "../fixtures/expenses";
import selectorExpensesTotal from "../../selectors/expenses-total";


test("should return 0 if no expenses", ()=>{
    const total = selectorExpensesTotal([]);
    expect(total).toBe(0);
});

test("should correctly add up a single expenses", ()=>{
    const total = selectorExpensesTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});

test("should correctly add up multiple expenses", ()=>{
    const total = selectorExpensesTotal(expenses);
    expect(total).toBe(750);
});

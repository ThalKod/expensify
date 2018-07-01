import selectExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [{
    id: "1",
    description: "GAU",
    note: "",
    amount: 124,
    createAt: 0
},
{
    id: "2",
    description: "Rent",
    note: "",
    amount: 194,
    createAt: moment(0).subtract(4, "days").valueOf()
},
{
    id: "3",
    description: "Luko",
    note: "",
    amount: 432,
    createAt: moment(0).add(4, "days").valueOf()
}];

test("should  filter by text value", ()=>{
    const filters = {
        text: "r",
        sortBy: "date",
        amount: 890,
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1]]);
});

test("should  filter by startDate value", ()=>{
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    }
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});


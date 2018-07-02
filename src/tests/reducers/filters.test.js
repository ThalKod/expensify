import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should setup default filter values", ()=>{
    const state = filterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sort By to amount", ()=>{
    const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("should set sort By to date", ()=>{
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(currentState, { type: "SORT_BY_DATE" });
    expect(state.sortBy).toBe("date");
});

test("should set text filter", ()=>{
    const state = filterReducer(undefined, { type: "SET_TEXT_FILTER", text: "Hello buddy" });
    expect(state.text).toBe("Hello buddy");
});

test("should set start date filter", ()=>{
    const state = filterReducer(undefined, { type: "SET_START_DATE", startDate: 1000 });
    expect(state.startDate).toBe(1000);
});

test("should set end date filter", ()=>{
    const state = filterReducer(undefined, { type: "SET_END_DATE", endDate: 5000 });
    expect(state.endDate).toBe(5000);
});

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";

test("Should generate set start date action object ", ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("Should generate set end date action object ", ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});

test("should set text filter action object", ()=>{
    const action = setTextFilter("test");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "test"
    });
});

test("should set text filter default action object", ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});


test("should genearate sort by date object", ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should genearate sort by amount object", ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

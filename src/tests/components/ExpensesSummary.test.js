import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";


test("should render ExpenseSummary with 1 count", ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={195}  />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with 2 count", ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={295}  />);
    expect(wrapper).toMatchSnapshot();
});
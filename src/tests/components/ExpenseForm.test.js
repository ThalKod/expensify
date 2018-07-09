import React from "react";
import { shallow } from "enzyme";
import  ExpenseForm  from "../../components/ExpenseForm";
import expense from "../fixtures/expenses";

test("should render ExpenseForm correctlty", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", ()=>{
    const wrapper = shallow(<ExpenseForm expense={expense[0]} />);
    expect(wrapper).toMatchSnapshot();
});
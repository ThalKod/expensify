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

test("should rendered error for invalid form submission", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: ()=>{}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", ()=>{
    const value = "New Description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", ()=>{
    const value = "Some note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change",{
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", ()=>{
    const value = "12.5";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target: { value }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid input", ()=>{
    const value = "12.544";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target: { value }
    });
    expect(wrapper.state("amount")).toBe("");
});
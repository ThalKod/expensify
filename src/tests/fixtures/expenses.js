import moment from "moment";

export default [{
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
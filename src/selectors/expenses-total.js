export default (expenses) =>{
    if(!expenses) return 0;

    let total = 0;

    for(let i = 0; i < expenses.length; i++){
        total += expenses[i].amount;
    }
    
    return total;
};
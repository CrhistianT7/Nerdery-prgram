/** function definition */
function calculateBill(bill, taxRate){
    const total = bill * (1 + taxRate);
    return total;
};

function sayHiTo(firstname) {
    return `Hello ${firstname}`;
};

function dotorize(name) {
    return `Dr. ${name}`;
};

function yell(name = 'default') {
    return `Hey ${name.toUpperCase()}`;
}

/** function call, **Run** */
const myTotal = calculateBill(100, 0.13);
const myTotal3 = calculateBill(50 + 50, 0.15);



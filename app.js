// Prompt user with food price question
let food = Number(prompt("Enter food price:"));
// Prompt user with desired tip percentage
let tipPercentage = Number(prompt("tip %?") / 100);
// Calculate the tip amount
let tipAmount = food * tipPercentage;
// Calculate total amount the user will pay
let totalAmount = food + tipAmount;
// Show user all amounts calculated
console.log(`Tip: ${tipAmount}\nDue to pay: ${totalAmount}`);
alert(`Tip: ${tipAmount}\nDue to pay: ${totalAmount}`);

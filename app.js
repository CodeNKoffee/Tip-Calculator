// VARIABLES
const form = document.getElementById("form");
const bill = document.getElementById("bill");
const tipPercentage = document.getElementById("tip__percentage");
const tipAmount = document.getElementById("tip__amount");
const totalAmount = document.getElementById("total__amount");
const empty = " ";


// FUNCTIONS
window.addEventListener("change", ()=> {
  totalAmount.innerHTML = bill.value;
})
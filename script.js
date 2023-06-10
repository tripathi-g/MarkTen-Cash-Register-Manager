const checkBtn = document.querySelector("#btn-check");
const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".notes");

checkBtn.addEventListener("click", () => {
    clearError();
    if (validateBillAmount(Number(billAmt.value), Number(cashGiven.value)))
        calculate(Number(billAmt.value), Number(cashGiven.value));
})

function validateBillAmount(billAmt, cashGiven) {
    console.log("billAmt = "+billAmt+" cash "+cashGiven);
    if (billAmt <= 0 || cashGiven <= 0)
        showError("bill amount and cash given cannot be negative or zero");
    else if (billAmt > cashGiven)
        showError("bill amount cannot be greater than cash given");
    else
        return true;
}

function calculate(billAmt, cashGiven) {
    const notes = [2000, 500, 100, 50, 20, 10, 5, 2, 1]
    let returnAmount = cashGiven - billAmt;
    console.log("return amount = " + returnAmount)
    for (let i = 0; i < notes.length; i++) {
        if (notes[i] <= returnAmount) {
            noOfNotes[i].innerHTML = (Math.trunc(returnAmount / notes[i]));
            returnAmount = returnAmount % notes[i];
        }
        else
            noOfNotes[i].innerHTML = 0;
    }
}

function showError(message) {
    errorMsg.innerHTML = message;
}

function clearError() {
    errorMsg.innerHTML = "";
}
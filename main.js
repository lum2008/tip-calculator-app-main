// window.onload = (event) => {
// };
const billAmount = document.getElementById("billAmount");
const customTipAmount = document.getElementById("customTipAmount");
const numOfPeople = document.getElementById("numOfPeople");
const percentBtns = document.getElementsByClassName("percent");
const resetBtn = document.getElementById("resetBtn");

var percentValue = 5;

billAmount.addEventListener("input", calculate);
customTipAmount.addEventListener("input", setCustomTip);
numOfPeople.addEventListener("input", calculate);
resetBtn.addEventListener("click", reset);

for (let i = 0; i < percentBtns.length; i++) {
  percentBtns[i].addEventListener("click", () => {
    percentValue = percentBtns[i].value;
    calculate();
  });
}

function calculate() {
  document.getElementById("totalText").innerHTML = `$${(
    billAmount.value *
    (percentValue / 100)
  ).toFixed(2)}`;
  document.getElementById("tipAmountText").innerHTML = `$${(
    (billAmount.value * (percentValue / 100)) /
    numOfPeople.value
  ).toFixed(2)}`;
}

function setCustomTip() {
  percentValue = customTipAmount.value;
  calculate();
}

function reset() {
  document.getElementById("totalText").innerHTML = `$${(0).toFixed(2)}`;
  document.getElementById("tipAmountText").innerHTML = `$${(0).toFixed(2)}`;
  billAmount.value = "";
  customTipAmount.value = "";
  numOfPeople.value = "";
}

function FilterInput(event) {
  var keyCode = "which" in event ? event.which : event.keyCode;
  isNumeric =
    (keyCode >= 48 /* KeyboardEvent.DOM_VK_0 */ &&
      keyCode <= 57) /* KeyboardEvent.DOM_VK_9 */ ||
    (keyCode >= 96 /* KeyboardEvent.DOM_VK_NUMPAD0 */ &&
      keyCode <= 105) /* KeyboardEvent.DOM_VK_NUMPAD9 */ ||
    keyCode === 110 ||
    keyCode === 8 ||
    keyCode === 190;
  modifiers = event.altKey || event.ctrlKey || event.shiftKey;
  return isNumeric || modifiers;
}

const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTatoal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const tatalValue = billValue * (1 + tipValue / 100);

  totalSpan.innerText = tatalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTatoal);

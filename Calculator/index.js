function calculate(event) {
  const input = document.getElementById("input-box");
  input.value += event;
}

function evaluateResult(t) {
  const input = document.getElementById("input-box");
  let result = input.value;

  input.value = eval(result);
}
function clearInput() {
  const input = document.getElementById("input-box");
  input.value = "";
}
function backspace() {
  const input = document.getElementById("input-box");
  input.value = input.value.slice(0, -1);
}

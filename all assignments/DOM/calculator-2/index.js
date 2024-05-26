const display_1 = document.getElementById("display_1");
const display_2 = document.getElementById("display_2");
const h1 = document.getElementById("h1");

function calculator(value) {
  if (value == "+") {
    try {
      h1.innerText = eval(+display_1.value + parseInt(display_2.value));
      console.log(h1);
    } catch (isNaN) {
      h1.innerText = "ERROR";
    }
  }
  if (value == "-") {
    try {
      h1.innerText = eval(+display_1.value - parseInt(display_2.value));
    } catch (isNaN) {
      h1.innerText = "ERROR";
    }
  }
  if (value == "*") {
    try {
      h1.innerText = eval(+display_1.value * parseInt(display_2.value));
    } catch (isNaN) {
      h1.innerText = "ERROR";
    }
  }
  if (value == "/") {
    try {
      h1.innerText = eval(+display_1.value / parseInt(display_2.value));
    } catch (isNaN) {
      h1.innerText = "ERROR";
    }
  }

}

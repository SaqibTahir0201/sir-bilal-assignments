// let userInput = document.getElementById("userInput");
let userInput_result = document.getElementById("userInput_result");
let random_result = document.getElementById("random_result");
function diceRoll() {
  let userInput = +prompt("enter number 1 to 6");
  let randomNumber = Math.ceil(Math.random() * 6);
  //   userInput_result.innerText = "user input =>" + userInput.value;

  if (userInput === randomNumber) {
    userInput_result.innerText = "your selected number =>" + userInput;
    random_result.innerHTML = "random number => " + randomNumber;
    alert("You won!");
  } else if (userInput !== randomNumber) {
    userInput_result.innerText = "your selected number => " + userInput;
    random_result.innerHTML = "generated number => " + randomNumber;
    alert("You lose!");
  }
}

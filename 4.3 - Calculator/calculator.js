document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let previousInput = "";
    let operation = null;
    //Update display function
    function updateDisplay(value) {
      display.textContent = value;
    }
  
    //Function to perform calculation
    function calculate() {
      let result;
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);
  
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 === 0 ? "Error: Cannot divide by zero" : num1 / num2;
          break;
        default:
          return;
      }
      updateDisplay(result);
      currentInput = result.toString();
      operation = null;
    }
    //Event listener for number buttons
    const numberButtons = document.querySelectorAll(
      "#row2 button, #row3 button, #row4 button, #row5 button:not(#equalsButton)"
    );
    numberButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        currentInput += button.textContent;
        updateDisplay(currentInput);
      });
    });
    //Event listener for operation buttons
    const operationButtons = document.querySelectorAll(
      "#divideButton, #multiplyButton, #subtractButton, #addButton"
    );
    operationButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        operation = button.textContent;
        previousInput = currentInput;
        currentInput = "";
      });
    });
    //Event listener for equals button
    document
      .getElementById("equalsButton")
      .addEventListener("click", function () {
        calculate();
      });
    //Event listener for reset button
    document.getElementById("resetButton").addEventListener("click", function () {
      currentInput = "";
      previousInput = "";
      operation = null;
      updateDisplay("0");
    });
  });
  
  
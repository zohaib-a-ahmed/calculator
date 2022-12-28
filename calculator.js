/**
 * Javascript file for provided caluclator creation and arithmetic.
 */

// result pane
var result = ``
var resultpane = document.querySelector(`#resultpane`);

//Number Pad
const numberPad = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', `decimal`];

numberPad.forEach(number => {
  const element = document.querySelector(`#${number}`);
  element.addEventListener(`click`, () => {
    // add the button number into the result text
    result += element.innerText;
    resultpane.textContent = result
  });
});


// Clear Function
const clear = document.querySelector(`#AC`)
clear.addEventListener(`click`, () => {
    //reset the result string
    result = ``
    resultpane.textContent = result
});

// Negate Function 
const negate = document.querySelector(`#negate`);
negate.addEventListener(`click`, () => {
  if (result[0] === "-") {
    // If the result is negative, remove the "-" character
    result = result.substring(1);
  } else {
    // If the result is not negative, add the "-" character
    result = "-" + result;
  }
  resultpane.textContent = result
});

// Percent Function
const percent = document.querySelector(`#percent`);
percent.addEventListener(`click`, () => {
  // Add leading zeros until there are 3 digits
  while (result.length < 3) {
    result = "0" + result;
  }
  // Insert a decimal point two digits from the right
  result = result.slice(0, result.length - 2) + "." + result.slice(-2);
  resultpane.textContent = result
});

// Backspace
const backspace = document.querySelector(`#backspace`);
backspace.addEventListener(`click`, () => {
    result = result.slice(0, result.length - 1);
    resultpane.textContent = result
});

// Arithmetic
const operations = ['add', 'subtract', 'divide', 'multiply'];
let var1 = ``
let arithmetic_operation;

operations.forEach(operation => {
  const operation_button = document.querySelector(`#${operation}`);
  operation_button.addEventListener(`click`, () => {
    if(result != ``){
        var1 = result;
    }
    arithmetic_operation = operation_button.innerText;
    resultpane.textContent = ``
    result = ``

    console.log(var1)
    console.log(arithmetic_operation)
  });
});



// Evaluation
const evaluation = document.querySelector(`#evaluate`)
evaluation.addEventListener(`click`, () => {
  var1 = evaluate(var1, arithmetic_operation, result);
  result = var1
});



function evaluate(var1, arithmetic_operation, var2) {
    let answer;
    switch (arithmetic_operation) {
      case "+":
        answer = parseFloat(var1) + parseFloat(var2);
        break;
      case "-":
        answer = parseFloat(var1) - parseFloat(var2);
        break;
      case "x":
        answer = parseFloat(var1) * parseFloat(var2);
        break;
      case "÷":
        answer = parseFloat(var1) / parseFloat(var2);
        break;
    }
    resultpane.textContent = answer.toString();
    return answer.toString()
  }
  

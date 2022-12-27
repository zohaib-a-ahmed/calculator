/**
 * Javascript file for provided caluclator creation and arithmetic.
 */

// result pane
var result = ``

//Number Pad
const numberPad = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', `decimal`];

numberPad.forEach(number => {
  const element = document.querySelector(`#${number}`);
  element.addEventListener(`click`, () => {
    // add the button number into the result text
    result += element.innerText;
    console.log(result) // testing feature
  });
});


// Clear Function
const clear = document.querySelector(`#AC`)
clear.addEventListener(`click`, () => {
    //reset the result string
    result = ``
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
});

// Backspace
const backspace = document.querySelector(`#backspace`);
backspace.addEventListener(`click`, () => {
    result = result.slice(0, result.length - 1);
});


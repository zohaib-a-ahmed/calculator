/**
 * Javascript file for provided caluclator creation and arithmetic.
 */

// result pane
var result = ``

//Number Pad
const numberPad = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];

numberPad.forEach(number => {
  const element = document.querySelector(`#${number}`);
  element.addEventListener(`click`, () => {
    result += element.innerText;
    console.log(result)
  });
});

// Clear Function
const clear = document.querySelector(`#AC`)
clear.addEventListener(`click`, () => {
    result = ``
});

//
const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let display = "";
let number = "";
let numberArray = [];
let operator;
let result;

function squareCube(e) {
  if (e.target.id === "square") {
    result = Number(number) ** 2;
  } else {
    result = Number(number) ** 3;
  }

  display = result;
  input.value = display;
  number = result;
  result = "";
  numberArray = [];
}

function equal(e) {
  if ((numberArray.length === 2 && operator) || e.target.id === "=") {
    switch (operator) {
      case "+":
        result = Number(numberArray[0]) + Number(numberArray[1]);
        break;
      case "-":
        result = Number(numberArray[0]) - Number(numberArray[1]);

        break;
      case "*":
        result = Number(numberArray[0]) * Number(numberArray[1]);

        break;
      case "/":
        result = Number(numberArray[0]) / Number(numberArray[1]);
        break;
    }
    display = result;
    input.value = display;

    numberArray = [];
    operator = "";
    number = result;
  }
  return;
}

function clear() {
  number = "";
  display = "";
  operator = "";
  result = 0;
  input.value = "";
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (/\d/.test(buttons[i].id)) {
      number += buttons[i].id;
      display += buttons[i].id;
      input.value = display;
      return;
    }

    if (buttons[i].id === ".") {
      if (!number.includes(".")) {
        number += buttons[i].id;
        display += buttons[i].id;
        input.value = display;
        return;
      }
    }

    if (buttons[i].id === "clear") {
      clear();
      return;
    }

    if (number) {
      if (buttons[i].id === "square" || buttons[i].id === "cube") {
        if (operator && numberArray.length === 1) {
          numberArray.push(number);
          equal(e);
          number = result;
        }

        squareCube(e);
        return;
      }

      if (/[+\-*/=]/.test(buttons[i].id)) {
        numberArray.push(number);

        if (buttons[i].id !== "=" && !operator) operator = buttons[i].id;

        number = "";
        display += buttons[i].id;
        input.value = display;
        equal(e);
      }
    }
  });
}

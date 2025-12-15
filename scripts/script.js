const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let display = "";
let number = "";
let operator;
let result;

function squareCube(num, e) {
  console.log(e.target.id);
  if (e.target.id === "square") {
    result = Number(num) ** 2;
  } else {
    result = Number(num) ** 3;
  }

  display = result;
  input.value = display;
  number = "";
}

function clear() {
  number = "";
  display = "";
  operator = "";
  result = "";
  input.value = 0;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log(buttons[i].id);
    if (/\d/.test(Number(buttons[i].id))) {
      number += buttons[i].id;
    }

    if (buttons[i].id === "clear") {
      clear();
    }

    input.value = number;
    if (number) {
      switch (buttons[i].id) {
        case "square":
        case "cube":
          squareCube(number, e);
          break;
      }
    }
  });
}

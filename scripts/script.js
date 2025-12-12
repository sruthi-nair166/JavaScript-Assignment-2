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
    switch (buttons[i].id) {
      case "0":
        number += "0";
        break;
      case "1":
        number += "1";
        break;
      case "2":
        number += "2";
        break;
      case "3":
        number += "3";
        break;
      case "4":
        number += "4";
        break;
      case "5":
        number += "5";
        break;
      case "6":
        number += "6";
        break;
      case "7":
        number += "7";
        break;
      case "8":
        number += "8";
        break;
      case "9":
        number += "9";
        break;
      case "clear":
        clear();
        break;
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

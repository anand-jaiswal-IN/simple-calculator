const screen_text = document.getElementById("screen-text");
const small_screen_text = document.getElementById("small-screen-text");
let num1 = 0;
let num2 = 0;
let expression = "";

function numberClicked(txt) {
  //for first number ---
  if (expression == "") {
    if (num1 == 0) {
      num1 = txt;
    } else {
      num1 += txt;
    }
  }

  //for second number ---
  else {
    if (num2 == 0) {
      num2 = txt;
    } else {
      num2 += txt;
    }
  }
  if (screen_text.innerHTML == 0) {
    screen_text.innerHTML = txt;
  } else {
    screen_text.innerHTML += txt;
  }
}

function expressionClicked(txt) {
  if (expression == "") {
    expression = txt;
    screen_text.innerHTML += expression;
  } else {
    calculate();
  }
}

function calculate() {
  let result = 0;

  if (num1 != 0 && num2 != 0 && expression != "") {
    switch (expression) {
      case "-":
        result = +num1 - +num2;
        break;
      case "+":
        result = +num1 + +num2;
        break;
      case "*":
        result = +num1 * +num2;
        break;
      case "/":
        result = +num1 / +num2;
        break;
      default:
        break;
    }
    small_screen_text.innerHTML = screen_text.innerHTML;
    screen_text.innerHTML = result.toFixed(1);
    num1 = String(result);
    num2 = 0;
    expression = "";
  }
}

function clearScreen() {
  screen_text.innerHTML = "0";
  small_screen_text.innerHTML = "Empty";
  num1 = 0;
  num2 = 0;
  expression = "";
}

function backspaceClicked() {
  if (expression == "") {
    num1 = num1.slice(0, num1.length - 1);
    screen_text.innerHTML = num1;
    if (num1 == "") {
      num1 = 0;
      screen_text.innerHTML = "0";
    }
  } else {
    if (
      screen_text.innerHTML.slice(screen_text.innerHTML.length - 1) == "*" ||
      screen_text.innerHTML.slice(screen_text.innerHTML.length - 1) == "/" ||
      screen_text.innerHTML.slice(screen_text.innerHTML.length - 1) == "+" ||
      screen_text.innerHTML.slice(screen_text.innerHTML.length - 1) == "-"
    ) {
      expression = "";
      screen_text.innerHTML = screen_text.innerHTML.slice(
        0,
        screen_text.innerHTML.length - 1
      );
    } else {
      num2 = num2.slice(0, num2.length - 1);
      screen_text.innerHTML = screen_text.innerHTML.slice(
        0,
        screen_text.innerHTML.length - 1
      );
    }
  }
}

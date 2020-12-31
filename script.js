// test number acquisition
result = document.querySelector(".result");
result.innerHTML = 1;

arrayOfButtons = document.querySelectorAll("button");
for (var i = 0; i < arrayOfButtons.length; i++) {
  var currButton = arrayOfButtons[i];
  console.log(currButton.innerHTML);
}
// the 3 cached items
var number1;
var number2;
var operator;
var curr; // to get a hold of what to display on result screen

function number(num) {
  if (operator == null) { // add to the second number
    if (number2 == null) { // set num as num2
      number2 = num;
    } else {
      number2 += num;
    }
    result.innerHTML = number2;
  } else { // add to the first number
    if (number1 == null) { // set num as num2
      number1 = num;
    } else {
      number1 += num;
    }
    result.innerHTML = number1;
  }
}

function equalise() {
  if (operator != null && number2 != null) { // best case, can equalise
    if (operator == "÷") {
      number1 = Number(number1) / Number(number2);
    } else if (operator == "×") {
      number1 = Number(number1) * Number(number2);
    } else if (operator == "-") {
      number1 = Number(number1) - Number(number2);
    } else if (operator == "+") {
      number1 = Number(number1) + Number(number2);
    }
    number2 = null;
    operator = null;
    result.innerHTML = number1;
  } else { // error handling of equality
    // do nothing
  }
}

function arithmeticOperator(op) {
  if (operator == null && number2 == null) {
    equalise();
    operator = op;
  } else {
    operator = op;
  }
}

// reset function
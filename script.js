// test number acquisition
result = document.querySelector(".result");
result.innerHTML = 0;

// the 3 cached items
var number1;
var number2;
var operator;
var curr; // to get a hold of what to display on result screen

// this function takes in number as input and adds it to the current num
// whilst also updating the UI
function addNumber(num) {
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
    number1 = number1.toString();
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

function backSpace() {
  if (number2 != null) {
    number2 = number2.slice(0, -1);
    result.innerHTML = number2;
  } else if (operator != null) {
    operator = null;
    result.innerHTML = number1;
  } else if (number1 != null) {
    number1 = number1.slice(0, -1);
    result.innerHTML = number1;
  }
}

function reset() {
  number1 = null;
  number2 = null;
  operator = null;
  result.innerHTML = "0"
}

arrayOfButtons = document.querySelectorAll("button");
for (var i = 0; i < arrayOfButtons.length; i++) {
  // var currButton = arrayOfButtons[i];
  // console.log(currButton.innerHTML);
}

myNumberButtons = document.querySelectorAll(".number");
console.log(myNumberButtons);

for (var i = 0; i < myNumberButtons.length; i++) {
  myNumberButtons[i].addEventListener("click", function () {
    console.log("HTML")
    console.log(myNumberButtons[i].innerHTML)
    console.log("HTML")
    addNumber(myNumberButtons[i].innerHTML);
  })
}
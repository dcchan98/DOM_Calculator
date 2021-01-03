// test number acquisition
result = document.querySelector(".result");
result.innerHTML = 0;

// the 3 cached items
var number1 = null;
var number2 = null;
var operator = null;

// to get a hold of what to display on result screen
var curr = null; 

// this function takes in number as input and adds it to the current num
// whilst also updating the UI
function addNumber(num) {
  if (operator == null) { // add to the second number
    if (number1 == null) { // set num as num2
      number1 = num;
    } else {
      number1 += num;
    }
    result.innerHTML = number1;
  } else { // add to the first number
    if (number2 == null) { // set num as num2
      number2 = num;
    } else {
      number2 += num;
    }
    result.innerHTML = number2;
  }
}

function equalise() {

  // Guard clause
  if (operator == null || number2 == null || number1 == null) {
    // Do nothing
    return;
  }
  switch (operator) {
    case "÷": {
      number1 = Number(number1) / Number(number2);
      break;
    }
    case "x": {
      number1 = Number(number1) * Number(number2);
      break;
    }
    case "-": {
      number1 = Number(number1) - Number(number2);
      break;
    }
    case "+": {
      number1 = Number(number1) + Number(number2);
      break;
    }
    default: {
      // Does nothing
      // Stops insertion of weird operators
      return;
    }
  }
  number2 = null;
  operator = null;
  number1 = number1.toString();
  result.innerHTML = number1;
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

myNumberButtons = document.querySelectorAll(".number");

// Event listener for number
for (var i = 0; i < myNumberButtons.length; i++) {
  myNumberButtons[i].addEventListener("click", function (e) {
    addNumber(e.target.innerHTML);
  })
}

// Event listener for C
document.querySelector(".c").addEventListener("click", reset);

// Event listener for ←
document.querySelector(".backspace").addEventListener("click", backSpace);

// Event listener for = 
document.querySelector(".equal").addEventListener("click", equalise);

// + - 
document.querySelector(".add").addEventListener("click",
  (e) => arithmeticOperator(e.target.innerHTML));

document.querySelector(".subtract").addEventListener("click",
  (e) => arithmeticOperator(e.target.innerHTML));

  // * / 
document.querySelector(".multiply").addEventListener("click",
(e) => arithmeticOperator(e.target.innerHTML));

document.querySelector(".divide").addEventListener("click",
(e) => arithmeticOperator(e.target.innerHTML));

// convenient debugger to 
function debug(){
   console.log(number1,operator,number2);
  console.log("num1","op","num2")
}
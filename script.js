// Acquire display item and button 

displayNumber = document.querySelector(".display-number");
item = Number(displayNumber.innerHTML );

addOneButton = document.querySelector(".add-one");
subOneButton = document.querySelector(".sub-one");

console.log(subOneButton);

// Callback to add one to display

function addOne(){
  item ++;
  displayNumber.innerHTML = item;
}

function subOne(){
  item --;
  displayNumber.innerHTML = item;
}

// add event listener to button 

addOneButton.addEventListener("click",addOne);
subOneButton.addEventListener("click",subOne);
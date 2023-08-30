let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element: any) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4
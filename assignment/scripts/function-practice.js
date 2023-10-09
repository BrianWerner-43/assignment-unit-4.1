console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
};
console.log('Should say Hello, Brian!:', helloName('Brian'));
// Remember to call the function to test



// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
console.log('Adding 2 numbers 12 + 7 equals:', addNumbers(12, 7));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;

};
console.log('Multiplying 3 nums together: 5 * 8 * 9 =:', multiplyThree(5, 8, 9));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
};
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('The number 8 should be true:', isPositive(8));
console.log('The number -4 should be false:', isPositive(-4));




// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = ['Socks', 'Shirt', 'Pants', 'Hoodie'];
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length -1];
  }

};
console.log('Last item in array is:', getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
  
  
};
console.log('This value should be true:', find(4, [4, 6, 8, 10]));
console.log('This value should be false:', find(3, [5, 7, 9, 11]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }
  else {
    return false;
  }

};
console.log('First letter should be true:', isFirstLetter('B', 'Banana'));
console.log('First letter should be false:', isFirstLetter('D', 'Banana'));


// 9. Function to return the sum of all numbers in an array
// creating a global variable named numArray that is equal to an array. [7, 13, 8, 12];
let numArray = [7, 13, 8, 12];
function sumAll(numArray) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];

  }
  // TODO: return the sum
  return sum;
};
console.log('The total sum of numArray is:', sumAll(numArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  const inputArray = [];
  for (let i = 0; i <array.length; i++) {
    if (array[i] > 0) {
      inputArray.push(array[i]);
    }
  } return inputArray;
};
console.log('These are the the positive numbers:', allPositive([12, 9, -4, 6, -7]));
  



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// A problem from codewars: 
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// created a function called evenOrOdd with number as a parameter
// Then write a conditional that uses the % operator that returns the remainder when number is divided by 2
// If remainder is 0, then number can be evenly divided by 2 which will return  a string'Even'
// and if remainder is not 0, number can't be divided evenly by 2 and get a return  a string'Odd'


function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};
// Invoking the function to check if this number is 'Even'
console.log('This number should be even:', evenOrOdd(6));
// Invoking the function to check if this number is 'Odd
console.log('This number should be odd:', evenOrOdd(3));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

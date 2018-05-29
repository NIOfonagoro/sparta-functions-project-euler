//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}

// function convertArrayToAnObject(array) {
//   var object = {};
//       array.forEach(function(element) {
//           object[element[0]] = element[1];
//       });
//       return object;
//
//       for (var i = 0; i < array.length; i = i + 2) {
//         array[i]
//       }
// }

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(value){

  switch (true) {
    case value % 3 == 0 && value % 5 == 0:
    return value = "FizzBuzz";
    break;
    case value % 5 == 0 && value % 3 != 0:
    return value = "Buzz";
    break;
    case value % 3 == 0 && value % 5 != 0:
    return value = "Fizz";
    break;

    default:
    return value;
  }
}



// Euler Question 1 ----------------------

var sum = 0;

for (var i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i;
  }
}

console.log(sum);

// ---------------------------------------

// Euler Question 2 - Fibonacci ------------------------
//Check to see how many numbers in Fibonacci sequence there are that are less that 4 million.
var previous_first = 0, previous_second = 1, next = 1;
var n = -2;

while (next < 4000000) {
  next = previous_first + previous_second;
  previous_first = previous_second;
  previous_second = next;
  n++;
}
console.log(n);

//Enter each value of the fibonacci sequence into an array.

var previous_first = 0, previous_second = 1, next = 1;
var array = [];

for(var i = 0; i <= n; i++) {
  next = previous_first + previous_second;
  previous_first = previous_second;
  previous_second = next;
  array[i] = next;
}
console.log(next);
console.log(array);


//Filter the array so that there are only even numbers left.
var arr = array.filter(array => array % 2 === 0);

console.log(arr);
var sum = 0;

//Add each number of the array together.
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

//------------------------------------------

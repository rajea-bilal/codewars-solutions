// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){

    const squared = numbers.map(item => item * item);
    const singleValue = squared.reduce((acc, curr) => {
      return acc = acc + curr;
    }, 0)
    return singleValue
  }
  
  console.log(squareSum([1, 2, 2]));
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Make a funtion that takes in a number and does something to it
// Use an if statement to put a condition
// Condition: if number is positive - make it negative
// If number is negative, keep it as it is

function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }
  
  console.log(makeNegative(100));
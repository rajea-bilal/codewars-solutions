// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


function mixedBag(array) {
    //convert all the elements to numbers
    let change = array.map(item => {
      return Number(item)
    })
    // adding the numbers into a single value - reduce
    let sum = change.reduce((total, current) => {
      total = total + current
      return total
    }, 0)
    
      return sum
      
    }
    
    console.log(mixedBag([1, 4, 5, '6', '8', 10, '29']));
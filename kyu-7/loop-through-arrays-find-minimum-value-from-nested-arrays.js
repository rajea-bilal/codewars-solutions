// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
 
    let numbers = 0
      for(let i = 0; i < arr.length; i++) {
        numbers = numbers + Math.min(...arr[i])
      }
    
    return numbers
  }
  
  
  console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))
       
  // PREP
  // params - a single array with multiple nested arrays inside
  // Result - return an integer value which is the sum of the minimum value from each nested array
  // Pseudo - Loop through the arrays, apply Math.min on each array, get the minimum value from each array and then add them all up
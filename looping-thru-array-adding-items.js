// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
 
//validate the input
  if(array === null || array.length === 0) return 0
 let total = 0
 for(let i = 0; i < array.length; i ++) {
   total = total + array[i]
 }
  return total/array.length
}

console.log(findAverage([1,2,3]))
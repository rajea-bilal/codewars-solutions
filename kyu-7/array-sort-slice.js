// ask
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
     
  if(array === null || array.length === 0 || array.length === 1 || array.length === 2) {
    return 0
  } else {
    const sortedArray = array.sort((a, b) => a - b)
    const smallestRemoved = sortedArray.slice(1)
    smallestRemoved.pop()
      return smallestRemoved.reduce((total, curr) => total + curr, 0)

    }
}
    
console.log(sumArray([0, 1, 6, 10, 10 ]))
     
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){

    let multiplied = x.reduce((acc, c) => {
      acc = acc * c
      return acc
    }, 1)
    
    return multiplied
  }
  
  console.log(grow([4, 1, 1, 1, 4]))
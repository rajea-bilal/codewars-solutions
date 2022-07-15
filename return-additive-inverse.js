// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function inversion(array) {
  
    let opposite = array.map(item => {
      return item * -1
    })
    return opposite
  }
  
  console.log(inversion([1,2,3,4,5]));
  
  
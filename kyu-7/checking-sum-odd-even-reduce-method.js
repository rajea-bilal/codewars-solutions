// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//   assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
// assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')

function oddOrEven(array) {
  
    if(array.length === 0) {
      return 'even'
    }
    
    let check = array.reduce((total, currant) => {
      total = total + currant
      return total 
    }, 0)
    
    if(check === 0) {
      return 'even'
    } else if (check === 1) {
      return 'odd'
    } else if (check % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
    
  
     
  }
  
  console.log(oddOrEven([-1023, -1, 3]))
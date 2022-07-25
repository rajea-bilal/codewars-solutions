// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//  assert.deepEqual( noOdds( [0,1] ), [0] )
//     assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )

function noOdds( values ){
 
    let check = values.filter(item => item % 2 === 0)
    return check
    
  }
    
  console.log(noOdds([0,1]))
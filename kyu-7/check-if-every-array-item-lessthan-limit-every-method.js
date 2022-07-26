// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// assert.strictEqual(smallEnough([66, 101], 200), true);
//     assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
//     assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);

function smallEnough(a, limit){
  

    let check = a.every(item => {
      if(item <= limit) {
        return true
      } else {
        return false
      }
    })
    return check
  
  }
  
  console.log(smallEnough([7,7,8,5,0,2,9,7,7,4,4,8,7,8,6], 8))
  
  // PREP
  // Params - an array and a limit value
  // Result - return a boolean of true/false depending on if the values are below/greater than limit
  // Pseudo - 
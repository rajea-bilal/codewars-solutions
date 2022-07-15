// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countingSheep(array) {
  
    let countingTrue = array.map(item => {
      if(item === true) {
        return 1
      } else if(item === false || item === null || item === undefined) {
        return 0
      }
    })
        let singleValue = countingTrue.reduce((total, current) => {
            total = total + current
            return total
        }, 0)
        return singleValue
        return countingTrue
    }
            
console.log(countingSheep([true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true]));
            

    
    
  
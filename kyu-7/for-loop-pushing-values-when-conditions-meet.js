// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :

// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes

// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

// assert.strictEqual(maxMultiple(2,7),6);
//     assert.strictEqual(maxMultiple(3,10),9);
//     assert.strictEqual(maxMultiple(7,17),14);

function maxMultiple(divisor, bound){

    let result = 0
       for(let i = divisor; i <= bound; i++) {
         if(i % divisor === 0 && i <= bound) {
           result = i
         }
       } 
    
    return result
  }
  
  console.log(maxMultiple(10,50))
  
  // PREP
  // params - single digit and limit
  // Result - a number that is divisible by the divisor && less than or equal to bound
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// Test.assertSimilar(getNumberFromString("1"), 1);
// Test.assertSimilar(getNumberFromString("123"), 123);
// Test.assertSimilar(getNumberFromString("this is number: 7"), 7);

function getNumberFromString(s) {


  
    let arr = s.split('');
  let result = '';
  
  for(let i = 0; i < arr.length; i++) {
    if(!isNaN(arr[i]) && arr[i] !== ' ') {
      result += arr[i]
    }
  }
   
   return +result;
   
   
 }
   
 
 console.log(getNumberFromString("this is number: 76"));
 
   
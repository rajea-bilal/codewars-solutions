// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function changeEverything(array){
 
    if(array === null || array.length === 0) {
      return []
    }
    
  // filtering out the positive numbers
    let positiveArray = array.filter(item => item > 0)
    
  // counting the total positive numbers
    let positiveCount = 0;
    for(let i = 0; i < positiveArray.length; i++){
      positiveCount = positiveCount + 1
    }
   
  // filtering out the negative numbers  
  let negativeArray = array.filter(item => item < 0)
  
  //sum of all negative numbers
  let negativeSum = negativeArray.reduce((total, current) => {
   total = total + current 
   return total
  }, 0)
  
  let finalArray = []
  finalArray.push(positiveCount)
  finalArray.push(negativeSum)
    
    return finalArray
    return negativeSum
    return positiveCount
  }
  
  console.log(changeEverything([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));




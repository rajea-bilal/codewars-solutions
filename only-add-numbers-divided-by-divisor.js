// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example

// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor){
  
    return numbers.filter(item => item % divisor === 0)
    }
    


// Second way of doing the above

function divisibleBy(numbers, divisor){
  
    let newArray = numbers.filter(function(item){
      return item % divisor === 0
    })
    
    return newArray
    
    }
    
console.log(divisibleBy([0], 4));
    
      
    
    
    
    
    
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


function operation(array) {

    if(array.length === 0) {
      return 0
    } else if (array.length === 1 && array[0] < 0) {
      return array[0]
    } else {
      return array.reduce((total, current) => {
        total = total + current
        return total
      })
    }
      
    }
    console.log(operation([1, 5.2, 4, 0, -1]));
     
     
   
     
      
   
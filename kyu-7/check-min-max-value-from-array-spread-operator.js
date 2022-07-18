// Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task

// Write a function that returns both the minimum and maximum number of the given list/array.


// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// [[1, 2, 3, 4, 5], [1, 5]],
// [[2334454, 5], [5, 2334454]],
// [[5], [5, 5]]

// PREP
// params - array
// returns - min and max value from the array
// pseudo - using the spread operator, we pull out the individual values from the arrays and then apply the Math.min/max on them.

function minMax(arr){
 
    let newArray = [] 
    let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)
    newArray.push(minValue)
    newArray.push(maxValue)
    return newArray
   
     
   }
   
   console.log(minMax([5]))
   
   
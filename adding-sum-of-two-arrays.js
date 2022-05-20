// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

let array01 = [1, 2, 3, 4, 5]
let array02 = [0, 0, 0, 0, 0]

// Option 1

function addition(arr1, arr2) {
  
 let add = arr1.concat(arr2)
 let sum = add.reduce((total, curr) => {
   total = total + curr
   return total
 }, 0)

 return sum
}

console.log(addition(array01, array02));

// Option 2

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }
 
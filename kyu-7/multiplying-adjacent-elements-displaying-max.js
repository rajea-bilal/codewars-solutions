// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes

// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples

// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:

// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// Test.assertEquals(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
// Test.assertEquals(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
// Test.assertEquals(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
// Test.assertEquals(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
// Test.assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

function adjacentElementsProduct(array) {
    let loop = []
    for(let i = 0; i < array.length - 1; i++) {
     loop.push(array[i] * array[i + 1])
    }
    
    // return loop
    let final = Math.max(...loop)
    return final
  }
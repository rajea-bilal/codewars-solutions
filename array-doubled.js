// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  
    let doubled = x.map(function(item){
      return item + item
    })
    return doubled
  }
  
  console.log(maps([1, 2, 3]));
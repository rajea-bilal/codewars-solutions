// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes

// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples

// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:

// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// Explanation:

// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:

// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
  
    let result = []
    let teamOne = array.filter((item, index) => index % 2 === 0).reduce((total, current) => total + current, 0)
    let teamTwo = array.filter((item, index) => index % 2 !== 0).reduce((total, current) => total + current, 0)
    result.push(teamOne, teamTwo)
    return result
   
  
  }
  
  console.log(rowWeights([80]))
  
       
  // PREP
  // params - an array with the weights of people
  // Result - return a new Array: total weight of team 1, total weight of team 2
  // Pseudo - first filter out the index numbers that are even
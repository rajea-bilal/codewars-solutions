// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    const totalScore = [...classPoints, yourPoints]
    // return totalScore
    const average = totalScore.reduce((curr, total) => total + curr, 0)/totalScore.length
    if(yourPoints > average) {
      return true
    } else {
      return false
    }
    
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))


//  assert.strictEqual(betterThanAverage([2, 3], 5), true);
//   });
  
//   it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
  
//   it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
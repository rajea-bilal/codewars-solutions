// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

let array = [7,10,13,5,16,11,11,17,17,7,6,8,4,2,17,5 ]

function average(array) {
  
let single = array.reduce((total, current) => {
  total = total + current
  return total
}, 0)

  let average = Math.floor(single / array.length)
return average

}
  
console.log(average(array))
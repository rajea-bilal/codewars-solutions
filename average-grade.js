// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  
  const averageScore = (s1 + s2 + s3)/3
  // console.log(averageScore)
  if(90 <= averageScore && averageScore <= 100) return 'A'
  if(80 <= averageScore && averageScore < 90) return 'B'
  if(70 <= averageScore && averageScore < 80) return 'C'
  if(60 <= averageScore && averageScore < 70) return 'D'
  if(0 <= averageScore && averageScore < 60) return 'F'
 
}

console.log(getGrade(95,90,93))
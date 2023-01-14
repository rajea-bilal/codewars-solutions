// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  
    if(a < 0 && b < 0) return 0
    const totalAngle = a + b
    const thirdAngle = 180 - totalAngle
    return thirdAngle
  
}

console.log(otherAngle(43, 78))
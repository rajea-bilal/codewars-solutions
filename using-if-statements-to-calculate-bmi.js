// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bodyMI = weight/height**2
  
  if(bodyMI <= 18.5) return "Underweight"
  if(bodyMI <= 25.0) return "Normal"
  if(bodyMI <= 30.0) return "Overweight"
  if(bodyMI > 30) return "Obese"
  
}

console.log(bmi(80, 1.80))
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      return name = 'Mercury'
      break
    case 2:
      return name = 'Venus'
      break
    case 3:
      return name = 'Earth'
      break
    case 4:
      return name = 'Mars'
      break
    case 5:
      return name = 'Jupiter'
      break
    case 6:
      return name = 'Saturn'
      break
    case 7:
      return name = 'Uranus'
      break
    case 8:
      return name = 'Neptune'
      break
  }
  
 
}

console.log(getPlanetName(5))
// Test.assertEquals(getPlanetName(2), 'Venus');
// Test.assertEquals(getPlanetName(5), 'Jupiter');
// Test.assertEquals(getPlanetName(3), 'Earth');
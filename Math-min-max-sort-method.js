// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
// Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

function differenceInAges(ages){
  
    let ageFacts = []
    
    let check = ages.sort((a, b) => a - b )
    
    let youngest = Math.min(...check)
    ageFacts.push(youngest)
    
    let oldest = Math.max(...check)
    ageFacts.push(oldest)
    
    let difference = oldest - youngest
    ageFacts.push(difference)
  
    return ageFacts
   
  
    
  
  }
  
  console.log(differenceInAges([82, 15, 6, 38, 35]))
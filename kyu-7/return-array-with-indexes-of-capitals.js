// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

function capital(word) {

    let newArray = []
    
    for(let i = 0; i < word.length; i++) {
      if(word[i] == word[i].toUpperCase()) {
        newArray.push(i)
      }
    }
    
    return newArray
  }
    
  console.log(capital('CodEWaRs'))
    
  
  // PREP
  // Params - a string
  // Result - should return an array with indexes of capital letters only
  // Example - 'CodEWaRs'), [0,3,4,6] 
  // Pseudo code -
// Write a function that returns a string in which firstname is swapped with last name.

// "john McClane" --> "McClane john"

// Test.assertEquals(nameShuffler('john McClane'),'McClane john')




function nameShuffler(str){
  
    let newString = str.split(' ').reverse().join(' ')
    return newString
    
  }
  
  console.log(nameShuffler('john McClane'));
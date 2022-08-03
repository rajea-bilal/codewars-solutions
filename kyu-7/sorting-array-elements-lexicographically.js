// // Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
     

// assert.deepEqual(sortme(['one', 'two', 'three' ]), ["one", "three", "two"]
                 
// // input: names - unsorted array
// // output: sorted array


function sortme(name) {
  
    let check = name.sort() 
    return check
    
  }
  
  console.log(sortme(['one', 'two', 'three' ]))
  
  
  // PREP
  // params - a single array with strings
  // Result - return an array ordered in lexicographical order
  // Pseudo - 